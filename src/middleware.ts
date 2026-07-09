import { NextRequest, NextResponse } from 'next/server'

const LOCALES = ['en', 'cn', 'jp', 'ko']

function detectLocale(pathname: string): string | null {
  for (const l of LOCALES) {
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) return l
  }
  return null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const matched = detectLocale(pathname)

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', matched ?? 'ko')

  if (matched) {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  const url = request.nextUrl.clone()
  url.pathname = `/ko${pathname}`
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\..*).*)',
  ],
}
