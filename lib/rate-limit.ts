import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store for rate limiting
const store: RateLimitStore = {};

// Rate limit configuration
const WINDOW_SIZE_IN_SECONDS = 60;
const MAX_REQUESTS_PER_WINDOW = 100;

export function getRateLimitConfig() {
  return {
    windowSize: WINDOW_SIZE_IN_SECONDS,
    maxRequests: MAX_REQUESTS_PER_WINDOW
  };
}

export async function rateLimiter(request: NextRequest) {
  // Get IP address from request
  const ip = request.ip ?? '127.0.0.1';
  const now = Date.now();

  // Clean up old entries
  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  }

  // Initialize or get existing window
  if (!store[ip]) {
    store[ip] = {
      count: 0,
      resetTime: now + (WINDOW_SIZE_IN_SECONDS * 1000)
    };
  }

  // If window has expired, create new window
  if (store[ip].resetTime < now) {
    store[ip] = {
      count: 0,
      resetTime: now + (WINDOW_SIZE_IN_SECONDS * 1000)
    };
  }

  // Increment request count
  store[ip].count++;

  // Check if over limit
  if (store[ip].count > MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json(
      { error: 'Too many requests, please try again later.' },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Limit': MAX_REQUESTS_PER_WINDOW.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': (store[ip].resetTime / 1000).toString(),
        }
      }
    );
  }

  // Add rate limit headers
  const headers = new Headers();
  headers.set('X-RateLimit-Limit', MAX_REQUESTS_PER_WINDOW.toString());
  headers.set('X-RateLimit-Remaining', (MAX_REQUESTS_PER_WINDOW - store[ip].count).toString());
  headers.set('X-RateLimit-Reset', (store[ip].resetTime / 1000).toString());

  return headers;
} 