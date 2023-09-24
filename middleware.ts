import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/thanks') &&
    !request.cookies.get('thanks')
  ) {
    return NextResponse.redirect(
      new URL(request.nextUrl.locale === 'ru' ? '/ru' : '/', request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api/).*)',
};
