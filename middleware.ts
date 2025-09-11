import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  // Enforce canonical host: redirect apex to www in production
  if (host === 'mothebroker.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'www.mothebroker.com'
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next internals and assets
    '/((?!_next/|favicon.ico|robots.txt|sitemap.xml|sitemap-0.xml|sitemap-index.xml).*)',
  ],
}

