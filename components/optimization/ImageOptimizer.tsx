'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  title,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85
}: OptimizedImageProps) {
  
  // Generate WebP sources for performance
  const imageLoader = ({ src, width, quality }: any) => {
    // In production, this would use a CDN or image optimization service
    return `${src}?w=${width}&q=${quality || 85}`;
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        loader={imageLoader}
        src={src}
        alt={alt}
        title={title || alt}
        width={width}
        height={height}
        priority={priority}
        loading={loading}
        sizes={sizes}
        quality={quality}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        onError={(e) => {
          console.error('Image failed to load:', src);
        }}
      />
      {/* AI-Friendly Image Description */}
      <span className="sr-only" aria-label={`Image description: ${alt}`}>
        {alt}
      </span>
    </div>
  );
}

// Preload critical images for Core Web Vitals
export function preloadCriticalImages() {
  if (typeof window !== 'undefined') {
    const criticalImages = [
      '/images/moabdel-headshot-final.webp',
      '/images/mo-logo-white.webp'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
  }
}

