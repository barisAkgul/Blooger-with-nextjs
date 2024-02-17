"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

import { Button } from "../ui/button";

import { MainNav } from "@/components/header/MainNav";
import { ThemeToggle } from "@/components/header/theme-toggle";

const Header = () => {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isBackTopBtnActive, setBackTopBtnActive] = useState(false);
  const [isMobileNavbarActive, setMobileNavbarActive] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbarActive(!isMobileNavbarActive);
    document.body.classList.toggle("nav-active");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderActive(true);
        setBackTopBtnActive(true);
      } else {
        setHeaderActive(false);
        setBackTopBtnActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full p-6 bg-oxford-blue z-50 ${
        isHeaderActive ? "header-active" : ""
      }`}
      data-header
    >
      <div className="container flex justify-between items-center gap-10">
        <div>Blooger</div>
        <MainNav className="mx-6 hidden lg:flex" />

        <div className="flex flex-row gap-10">
          <ThemeToggle />

          <Button size="sm" className="btn">
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
