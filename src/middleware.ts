import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|svg|fonts|.well-known).*)',
  ],
};
