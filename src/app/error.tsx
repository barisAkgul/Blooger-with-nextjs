"use client";

import Image from "next/image";
import React from "react";

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-[100px] flex-col">
      {" "}
      <Image height={450} width={450} alt="logo" src="/404.svg" />
    </div>
  );
};

export default ErrorPage;
