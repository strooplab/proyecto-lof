"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  // Función búsqueda para encontrar el nombre y categoría en navigation.ts
  const findBreadcrumbTrail = () => {
    if (pathname === "/") return [];
    const trail = [{ name: "Inicio", href: "/" }];
    for (const item of navigation) {
      if (item.href === pathname) {
        return [];
      }
      if (item.children) {
        const childMatch = item.children.find((child) => {
          if (child.href === "/") return false;
          return pathname.includes(child.href);
        });

        if (childMatch) {
          trail.push({ name: item.name, href: item.href });
          trail.push({ name: childMatch.name, href: childMatch.href });

          if (pathname !== childMatch.href) {
            const segments = pathname.split("/").filter(Boolean);
            const lastSegment = segments[segments.length - 1];
            if (lastSegment && lastSegment !== childMatch.href.replace("/", "")) {
              const formattedName = lastSegment
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              trail.push({ name: formattedName, href: pathname });
            }
          }
          break;
        }
      }
    }
    return trail;
  };

  const breadcrumbs = findBreadcrumbTrail();
  if (breadcrumbs.length <= 1) return null;

  const isNoBannerPage = pathname.split("/").length > 2 && !pathname.startsWith("/categorias");
  const textBg = isNoBannerPage ? "text-espresso/80" : "text-cream/80";
  const iconBg = isNoBannerPage ? "text-espresso" : "text-cream";
  const linkHover = isNoBannerPage ? "hover:text-espresso" : "hover:text-cream";
  return (
    <nav aria-label="Breadcrumb" className="px-2 py-6">
      <ul className={`flex items-center gap-2 text-sm ${textBg}`}>
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {!isLast ? (
                <Link href={item.href} className={`${linkHover} transition-colors`}>
                  {item.name}
                </Link>
              ) : (
                <span className={`${iconBg} font-medium`} aria-current="page">
                  {item.name}
                </span>
              )}

              {/* Separador */}
              {!isLast && (
                <span
                  className="material-symbols-outlined fill-cream/60"
                  style={{
                    fontSize: "14px",
                    fontVariationSettings: "'opsz' 48",
                  }}
                >
                  arrow_forward_ios
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
