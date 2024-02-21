// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { AiOutlineMenu } from "react-icons/ai";

// import { Button } from "../ui/button";

// import { MainNav } from "@/components/header/MainNav";
// import { ThemeToggle } from "@/components/header/ThemeToggle";

// import { UserNav } from "../header/UserNav";

// const Header = () => {
//   const { data: session } = useSession();

//   console.log(session);

//   const [isHeaderActive, setHeaderActive] = useState(false);
//   const [isBackTopBtnActive, setBackTopBtnActive] = useState(false);
//   const [isMobileNavbarActive, setMobileNavbarActive] = useState(false);

//   const toggleMobileNavbar = () => {
//     setMobileNavbarActive(!isMobileNavbarActive);
//     document.body.classList.toggle("nav-active");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setHeaderActive(true);
//         setBackTopBtnActive(true);
//       } else {
//         setHeaderActive(false);
//         setBackTopBtnActive(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-6 bg-oxford-blue z-50 ${
//         isHeaderActive ? "header-active" : ""
//       }`}
//       data-header
//     >
//       <div className="container flex justify-between items-center gap-10">
//         <div>Blooger</div>
//         <MainNav className="mx-6 hidden lg:flex" />

//         <div className="flex flex-row gap-10">
//           <ThemeToggle />

//           {session?.user ? (
//             <UserNav
//               username={session?.user.name}
//               email={session?.user.email}
//             />
//           ) : (
//             <Button size="sm" className="btn">
//               <Link href="/sign-in">Sign in</Link>
//             </Button>
//           )}

//           {/* Mobile Open Button */}
//           <button
//             className="lg:hidden text-text-wild-blue-yonder text-3xl"
//             aria-label="open menu"
//             data-nav-toggler
//             // onClick={toggleMobileNavbar}
//           >
//             <AiOutlineMenu />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import Link from "next/link";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";

import { Button } from "../ui/button";

import { MainNav } from "@/components/header/MainNav";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { UserNav } from "../header/UserNav";

const Navbar = async () => {
  const session = await getServerSession(options);

  const user = await prismadb.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  return (
    <header>
      <div className="flex justify-around items-center h-16">
        <div>Blooger</div>
        <MainNav className="mx-6" />

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {session?.user ? (
            <UserNav
              username={session?.user.name}
              email={session?.user.email}
              isAdmin={user?.isAdmin}
            />
          ) : (
            <Button size="sm" className="btn">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
