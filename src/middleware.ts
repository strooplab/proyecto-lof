import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname === "/login";
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin");
    const isApiAdmin = req.nextUrl.pathname.startsWith("/api/admin");

    // Redirección a login si intenta acceder a admin sin autenticación
    if ((isAdminPage || isApiAdmin) && !isAuth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Redirección a admin si está autenticado y va a login
    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Solo permite acceso a admin con token
        return !!token;
      },
    },
  },
);

// Rutas protegidas por el middleware
export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/login"],
};
