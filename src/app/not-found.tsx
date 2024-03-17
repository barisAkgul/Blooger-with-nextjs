"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { ScreenRoutes } from "@/helpers/config/site";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-[100px] flex-col gap-6">
      {" "}
      <Image height={450} width={450} alt="logo" src="/404.svg" />
      <Button size="sm" className="btn">
        <Link href={`/${ScreenRoutes.HOME}`}>Go to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
