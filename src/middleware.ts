import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-pathname`
  // This header can be read in Server Components using `headers()`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // This ensures the middleware runs on pages but not on static assets or API routes.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}