/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mothebroker.com",
  generateRobotsTxt: true,
  sitemapSize: 45000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404","/500","/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/","/preview","/draft","/temp","/staging"] }
    ],
    additionalSitemaps: []
  },
  transform: async (config, path) => {
    let priority = 0.7, changefreq = "weekly"
    if (path === "/") { priority = 1.0; changefreq = "weekly" }
    else if (path.startsWith("/loan-programs")) { priority = 0.9 }
    else if (path.startsWith("/locations") || path.startsWith("/cities")) { priority = 0.85 }
    else if (path.startsWith("/articles") || path.startsWith("/blog") || path.startsWith("/guides")) { priority = 0.7; changefreq = "monthly" }
    else if (path.startsWith("/contact") || path.startsWith("/about")) { priority = 0.6; changefreq = "monthly" }
    return { loc: path, changefreq, priority, lastmod: new Date().toISOString() }
  },
  additionalPaths: async (config) => {
    const extra = []
    // NOTE: could programmatically add static routes here; excluded by hints in validation layer
    return extra
  }
}

