import React from "react";
import { Heading } from "../ui/heading";

import prismadb from "@/lib/prismadb";
import Image from "next/image";

const PopularTagsSection = async () => {
  const categories = await prismadb.category.findMany();

  return (
    <section className="tags mb-40" aria-labelledby="tag-label">
      <div className="container">
        <Heading
          variant="landing"
          title="Popular Tags"
          description="Most searched keywords"
        />

        <ul className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  ">
          {categories.map((category, index) => (
            <li key={index}>
              <button className="w-full flex items-center gap-2 p-4 rounded-2xl bg-oxford-blue-2 border border-prussian-blue  tag-btn">
                <div className="relative w-[32px] h-[32px]  flex gap-2 items-center">
                  <Image
                    fill
                    className="object-cover rounded-full"
                    src={category.img}
                    alt="user-image"
                  />
                </div>
                <p className="btn-text">{category.title}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularTagsSection;
