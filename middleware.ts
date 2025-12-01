import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow homepage and public assets
  if (
    pathname === '/' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/mo-abdel-contact.vcf') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.webp') ||
    pathname.endsWith('.vcf')
  ) {
    return NextResponse.next();
  }

  // Redirect all other pages to homepage
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    '/((?!api|_next/static|_next/image).*)',
  ],
};
