import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

import { Button } from "../ui/button";

import { MainNav } from "@/components/header/MainNav";
import { ThemeToggle } from "@/components/header/theme-toggle";

const Header = async () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 bg-bg-oxford-blue-2 z-50">
      <div className="container flex justify-between items-center gap-10">
        <div>Blooger</div>
        <MainNav className="mx-6 hidden lg:flex" />

        <div className="flex flex-row gap-10">
          <ThemeToggle />

          <Button size="sm">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <button
            className="lg:hidden text-text-wild-blue-yonder text-3xl"
            aria-label="open menu"
            data-nav-toggler
            // onClick={toggleMobileNavbar}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
