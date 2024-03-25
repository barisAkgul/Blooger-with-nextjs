import React from "react";
import Link from "next/link";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";

import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";

import { MainNav } from "@/components/header/MainNav";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { UserNav } from "../header/UserNav";
import { ScreenRoutes } from "@/helpers/config/site";
import { MobileSidebar } from "../header/mobile/MobileSidebar";
import { Logo } from "../header/Logo";

const Navbar = async () => {
  const session = await getServerSession(options);

  const user = await prismadb.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  return (
    <header className="container md:pr-0 md:pl-0">
      <div className="flex justify-between items-center h-16 pt-[24px] pb-[24px]">
        <div className="relative">
          <Logo />
        </div>
        <MainNav className="mx-6" />

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {session?.user ? (
            <UserNav
              username={user?.name}
              email={user?.email}
              isAdmin={user?.isAdmin}
              img={user?.img}
            />
          ) : (
            <Button size="sm" className="btn">
              <Link href={`/${ScreenRoutes.SIGNIN}`}>Sign in</Link>
            </Button>
          )}

          <MobileSidebar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
