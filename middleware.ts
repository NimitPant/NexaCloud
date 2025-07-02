import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  const publicPaths = ['/sign-in', '/sign-up', '/api/auth/login', '/api/auth/register']
  const { pathname } = req.nextUrl

  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  try {
    await jose.jwtVerify(token, secret)
    return NextResponse.next()
  } catch (error) {
    console.error('JWT Verification Error:', error)
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets (your static assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|assets).*)',
  ],
}