import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL('/_closed', request.url));
}

export const config = {
  matcher: '/((?!_next|favicon\\.ico).+)'
};
