const ADMIN_ROUTES = ["/dashboard"];

export function isAdminRoute(path: string): boolean {
  return ADMIN_ROUTES.some((route) => path.startsWith(route));
}

export function isLoginPage(path: string): boolean {
  return path === "/login" || path === "/admin/login";
}

export function isAdminUser(decodedToken: {
  userID: string;
  role: string;
}): boolean {
  return decodedToken?.role === "Admin";
}
