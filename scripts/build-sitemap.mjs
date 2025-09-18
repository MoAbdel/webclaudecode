#!/usr/bin/env node

import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import fs from 'fs/promises';
import path from 'path';
import zlib from 'zlib';
import { promisify } from 'util';

const gzip = promisify(zlib.gzip);

// Configuration
const BASE_URL = 'https://www.mothebroker.com';
const CRAWL_DELAY = 250; // 4 requests per second (250ms delay)
const MAX_CONCURRENT = 10;
const PUBLIC_DIR = './public';
const ROBOTS_TXT_PATH = path.join(PUBLIC_DIR, 'robots.txt');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const SITEMAP_GZ_PATH = path.join(PUBLIC_DIR, 'sitemap.xml.gz');

// Axios instance with proper headers
const httpClient = axios.create({
  timeout: 30000,
  maxRedirects: 5,
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; SitemapBot/1.0; +https://www.mothebroker.com/robots.txt)',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
  }
});

class SitemapBuilder {
  constructor() {
    this.discoveredUrls = new Set();
    this.processedUrls = new Set();
    this.validUrls = new Map(); // URL -> {lastmod, priority, changefreq}
    this.queue = [BASE_URL];
    this.stats = {
      discovered: 0,
      processed: 0,
      included: 0,
      redirects: 0,
      noindex: 0,
      nonWww: 0,
      trailingSlashFixed: 0,
      queryRemoved: 0,
      fragmentRemoved: 0,
      errors: 0
    };
  }

  // Normalize URL to canonical form
  normalizeUrl(urlString, baseUrl = BASE_URL) {
    try {
      const url = new URL(urlString, baseUrl);

      // Only allow same domain
      if (!url.hostname.endsWith('mothebroker.com')) {
        return null;
      }

      // Force www and https
      url.protocol = 'https:';
      if (url.hostname === 'mothebroker.com') {
        url.hostname = 'www.mothebroker.com';
        this.stats.nonWww++;
      }

      // Remove query and fragment
      if (url.search) {
        this.stats.queryRemoved++;
      }
      if (url.hash) {
        this.stats.fragmentRemoved++;
      }
      url.search = '';
      url.hash = '';

      // Handle trailing slash (remove except for root)
      if (url.pathname !== '/' && url.pathname.endsWith('/')) {
        url.pathname = url.pathname.slice(0, -1);
        this.stats.trailingSlashFixed++;
      }

      return url.toString();
    } catch (error) {
      return null;
    }
  }

  // Extract URLs from HTML content
  extractUrls(html, baseUrl) {
    const $ = cheerio.load(html);
    const urls = new Set();

    // Extract from various link sources
    $('a[href]').each((_, element) => {
      const href = $(element).attr('href');
      if (href) {
        const normalized = this.normalizeUrl(href, baseUrl);
        if (normalized) {
          urls.add(normalized);
        }
      }
    });

    // Also check for URLs in nav, footer, etc.
    $('nav a[href], footer a[href], .menu a[href]').each((_, element) => {
      const href = $(element).attr('href');
      if (href) {
        const normalized = this.normalizeUrl(href, baseUrl);
        if (normalized) {
          urls.add(normalized);
        }
      }
    });

    return Array.from(urls);
  }

  // Check if page has noindex
  hasNoIndex(html) {
    const $ = cheerio.load(html);

    // Check meta robots
    const robotsMeta = $('meta[name="robots"]').attr('content') || '';
    if (robotsMeta.toLowerCase().includes('noindex')) {
      return true;
    }

    // Check specific noindex meta
    const noindexMeta = $('meta[name="googlebot"], meta[name="bingbot"]').attr('content') || '';
    if (noindexMeta.toLowerCase().includes('noindex')) {
      return true;
    }

    return false;
  }

  // Get canonical URL from HTML
  getCanonicalUrl(html, currentUrl) {
    const $ = cheerio.load(html);
    const canonical = $('link[rel="canonical"]').attr('href');

    if (canonical) {
      const canonicalNormalized = this.normalizeUrl(canonical, currentUrl);
      // Only use if it's same domain
      if (canonicalNormalized && canonicalNormalized.includes('www.mothebroker.com')) {
        return canonicalNormalized;
      }
    }

    return currentUrl;
  }

  // Determine page priority based on URL structure
  getPagePriority(url) {
    const urlObj = new URL(url);
    const path = urlObj.pathname;

    // Root page
    if (path === '/') return '1.0';

    // Section hubs
    if (path.match(/^\/(loan-programs|areas|blog)\/?$/)) return '0.9';

    // Legal/about pages
    if (path.match(/^\/(privacy|terms|about|contact|disclaimer)\/?$/)) return '0.6';

    // Detail pages in main sections
    if (path.match(/^\/(loan-programs|areas)\//)) return '0.8';

    // Blog posts
    if (path.match(/^\/blog\//)) return '0.7';

    // Default
    return '0.7';
  }

  // Determine change frequency
  getChangeFreq(url) {
    const urlObj = new URL(url);
    const path = urlObj.pathname;

    // Root and blog index
    if (path === '/' || path === '/blog' || path === '/blog/') return 'daily';

    // Main sections
    if (path.match(/^\/(loan-programs|areas)\/?$/)) return 'weekly';

    // Legal pages
    if (path.match(/^\/(privacy|terms|disclaimer)\/?$/)) return 'yearly';

    // Everything else
    return 'monthly';
  }

  // Crawl a single URL
  async crawlUrl(url) {
    if (this.processedUrls.has(url)) {
      return;
    }

    this.processedUrls.add(url);
    this.stats.processed++;

    try {
      console.log(`Crawling: ${url}`);

      const response = await httpClient.get(url);

      // Check if we got redirected
      if (response.request.res.responseUrl && response.request.res.responseUrl !== url) {
        console.log(`Redirect detected: ${url} -> ${response.request.res.responseUrl}`);
        this.stats.redirects++;

        // Process the final URL instead
        const finalUrl = this.normalizeUrl(response.request.res.responseUrl);
        if (finalUrl && finalUrl !== url && !this.processedUrls.has(finalUrl)) {
          await this.crawlUrl(finalUrl);
        }
        return;
      }

      // Only process 200 responses
      if (response.status !== 200) {
        console.log(`Non-200 status for ${url}: ${response.status}`);
        return;
      }

      const html = response.data;

      // Check for noindex
      if (this.hasNoIndex(html)) {
        console.log(`Noindex found for: ${url}`);
        this.stats.noindex++;
        return;
      }

      // Get canonical URL
      const canonicalUrl = this.getCanonicalUrl(html, url);
      const finalUrl = canonicalUrl || url;

      // Extract last modified date
      let lastmod = new Date().toISOString().split('T')[0]; // Default to today
      const lastModifiedHeader = response.headers['last-modified'];
      if (lastModifiedHeader) {
        try {
          lastmod = new Date(lastModifiedHeader).toISOString().split('T')[0];
        } catch (e) {
          // Keep default if parsing fails
        }
      }

      // Store valid URL with metadata
      this.validUrls.set(finalUrl, {
        lastmod,
        priority: this.getPagePriority(finalUrl),
        changefreq: this.getChangeFreq(finalUrl)
      });

      this.stats.included++;

      // Extract new URLs to crawl
      const newUrls = this.extractUrls(html, url);
      for (const newUrl of newUrls) {
        if (!this.discoveredUrls.has(newUrl) && !this.processedUrls.has(newUrl)) {
          this.discoveredUrls.add(newUrl);
          this.queue.push(newUrl);
          this.stats.discovered++;
        }
      }

    } catch (error) {
      console.error(`Error crawling ${url}:`, error.message);
      this.stats.errors++;
    }
  }

  // Main crawling function with rate limiting
  async crawl() {
    console.log(`Starting crawl from: ${BASE_URL}`);

    this.discoveredUrls.add(BASE_URL);
    this.stats.discovered++;

    while (this.queue.length > 0) {
      const currentBatch = this.queue.splice(0, MAX_CONCURRENT);

      await Promise.all(
        currentBatch.map(async (url) => {
          await this.crawlUrl(url);
          // Rate limiting
          await new Promise(resolve => setTimeout(resolve, CRAWL_DELAY));
        })
      );
    }

    console.log('\nCrawl completed!');
  }

  // Validate sitemap URLs (ensure no redirects)
  async validateSitemap() {
    console.log('\nValidating sitemap URLs...');
    const validationErrors = [];

    for (const url of this.validUrls.keys()) {
      try {
        const response = await httpClient.head(url);

        // Check if redirected
        if (response.request.res.responseUrl && response.request.res.responseUrl !== url) {
          validationErrors.push(`${url} redirects to ${response.request.res.responseUrl}`);
          this.validUrls.delete(url);
        }
      } catch (error) {
        validationErrors.push(`${url} validation failed: ${error.message}`);
        this.validUrls.delete(url);
      }
    }

    if (validationErrors.length > 0) {
      console.log('\nValidation errors found:');
      validationErrors.forEach(error => console.log(`  - ${error}`));
    } else {
      console.log('All URLs validated successfully!');
    }
  }

  // Generate sitemap XML
  generateSitemap() {
    const urls = Array.from(this.validUrls.entries()).sort(([a], [b]) => {
      const pathA = new URL(a).pathname;
      const pathB = new URL(b).pathname;
      return pathA.localeCompare(pathB);
    });

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const [url, metadata] of urls) {
      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${metadata.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${metadata.changefreq}</changefreq>\n`;
      xml += `    <priority>${metadata.priority}</priority>\n`;
      xml += '  </url>\n';
    }

    xml += '</urlset>\n';
    return xml;
  }

  // Update robots.txt
  async updateRobotsTxt() {
    let robotsContent = '';

    try {
      robotsContent = await fs.readFile(ROBOTS_TXT_PATH, 'utf-8');
    } catch (error) {
      // File doesn't exist, create basic robots.txt
      robotsContent = 'User-agent: *\nAllow: /\n\n';
    }

    // Remove existing sitemap entries
    robotsContent = robotsContent.replace(/^Sitemap:.*$/gm, '').trim();

    // Add our sitemap
    robotsContent += '\n\nSitemap: https://www.mothebroker.com/sitemap.xml\n';

    await fs.writeFile(ROBOTS_TXT_PATH, robotsContent);
    console.log(`Updated robots.txt with sitemap reference`);
  }

  // Write sitemap files
  async writeSitemapFiles() {
    await fs.mkdir(PUBLIC_DIR, { recursive: true });

    const sitemapXml = this.generateSitemap();

    // Write XML file
    await fs.writeFile(SITEMAP_PATH, sitemapXml);
    console.log(`Written sitemap to: ${SITEMAP_PATH}`);

    // Write compressed file
    const compressed = await gzip(sitemapXml);
    await fs.writeFile(SITEMAP_GZ_PATH, compressed);
    console.log(`Written compressed sitemap to: ${SITEMAP_GZ_PATH}`);

    // Update robots.txt
    await this.updateRobotsTxt();
  }

  // Print summary report
  printReport() {
    console.log('\n' + '='.repeat(60));
    console.log('SITEMAP GENERATION REPORT');
    console.log('='.repeat(60));
    console.log(`Total URLs discovered: ${this.stats.discovered}`);
    console.log(`Total URLs processed: ${this.stats.processed}`);
    console.log(`Total URLs included in sitemap: ${this.stats.included}`);
    console.log('\nURLs dropped:');
    console.log(`  - Redirects: ${this.stats.redirects}`);
    console.log(`  - Noindex pages: ${this.stats.noindex}`);
    console.log(`  - Non-www fixed: ${this.stats.nonWww}`);
    console.log(`  - Trailing slashes fixed: ${this.stats.trailingSlashFixed}`);
    console.log(`  - Query strings removed: ${this.stats.queryRemoved}`);
    console.log(`  - Fragments removed: ${this.stats.fragmentRemoved}`);
    console.log(`  - Errors: ${this.stats.errors}`);

    console.log('\nSample URLs (first 10):');
    const sampleUrls = Array.from(this.validUrls.keys()).slice(0, 10);
    sampleUrls.forEach((url, index) => {
      console.log(`  ${index + 1}. ${url}`);
    });

    console.log('\nAcceptance Test Results:');
    const hasNonWwwUsda = Array.from(this.validUrls.keys()).some(url =>
      url === 'https://mothebroker.com/loan-programs/usda-rural-loans'
    );
    const hasWwwUsda = Array.from(this.validUrls.keys()).some(url =>
      url === 'https://www.mothebroker.com/loan-programs/usda-rural-loans'
    );

    console.log(`  ❌ Non-www USDA URL in sitemap: ${hasNonWwwUsda ? 'FAIL' : 'PASS'}`);
    console.log(`  ✅ Www USDA URL in sitemap: ${hasWwwUsda ? 'PASS' : 'FAIL'}`);

    console.log('\n' + '='.repeat(60));
  }

  // Main execution function
  async run() {
    try {
      console.log('🚀 Starting sitemap generation for www.mothebroker.com');

      await this.crawl();
      await this.validateSitemap();
      await this.writeSitemapFiles();
      this.printReport();

      console.log('\n✅ Sitemap generation completed successfully!');
      console.log(`📄 Sitemap: ${SITEMAP_PATH}`);
      console.log(`📦 Compressed: ${SITEMAP_GZ_PATH}`);
      console.log(`🤖 Robots.txt updated: ${ROBOTS_TXT_PATH}`);

    } catch (error) {
      console.error('❌ Sitemap generation failed:', error);
      process.exit(1);
    }
  }
}

// Run the sitemap builder
const builder = new SitemapBuilder();
await builder.run();