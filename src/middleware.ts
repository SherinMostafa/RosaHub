import { NextRequest, NextResponse } from "next/server";
import { CreateRedirectResponse } from "./utils/response";
import { isAdminRoute, isAdminUser, isLoginPage } from "./utils/routes";
import { VerifyToken } from "./utils/token";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const cookie = request.cookies.get("cookie");
  const token = cookie?.value;

  if (isLoginPage(pathname)) {
    const decodedToken = await VerifyToken(token!);

    if (decodedToken?.role === "Admin") {
      return CreateRedirectResponse("/dashboard");
    }

    if (decodedToken?.role === "User") {
      return CreateRedirectResponse("/");
    }
  }

  if (isAdminRoute(pathname)) {
    const decodedToken = await VerifyToken(token!);

    if (!decodedToken) {
      return CreateRedirectResponse("/admin/login");
    }

    if (!isAdminUser(decodedToken)) {
      return CreateRedirectResponse("/");
    }
  }

  return NextResponse.next();
}
