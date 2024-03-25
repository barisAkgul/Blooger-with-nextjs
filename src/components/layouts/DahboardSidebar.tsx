"use client";

import { useState } from "react";
import { Nav } from "../ui/nav";

import {
  Notebook,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";

import useWindowDimensions from "@/hooks/use-window-size";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { width } = useWindowDimensions();

  const mobileWidth = width && width < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative  px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/dashboard/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Posts",
            href: "/dashboard/posts",
            icon: Notebook,
            variant: "ghost",
          },
          {
            title: "Categories",
            href: "/dashboard/categories",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
