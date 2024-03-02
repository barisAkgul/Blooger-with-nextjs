"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { isActiveRoute } from "@/lib/utils";
import { ScreenRoutes } from "@/helpers/config/site";

export const routes = [
  {
    href: `${ScreenRoutes.HOME}`,
    label: "Homepage",
  },
  {
    href: `/${ScreenRoutes.BLOG}`,
    label: "Blog",
  },
  {
    href: `/${ScreenRoutes.CONTACT}`,
    label: "Contact",
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "hidden md:flex items-center space-x-4 lg:space-x-6 gap-20 ",
        className
      )}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-wild-blue-yonder font-medium transition-colors hover:text-primary text-base",
            isActiveRoute(pathname, route.href)
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
