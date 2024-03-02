"use client";

import { SidebarItem } from "./SidebarItem";
import { routes } from "../MainNav";

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full  mt-12">
      {routes.map((route) => (
        <SidebarItem key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
