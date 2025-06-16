import { NextResponse } from "next/server";

function middleware(request: NextResponse) {
  const token = request.cookies.get("token")?.value;
  if (token) {
    return NextResponse.next();
  }
  const url = new URL(request.url);
  url.pathname = "/login";
  return NextResponse.redirect(url.toString());
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

export default middleware;
