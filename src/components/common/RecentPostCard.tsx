"use client";

import { ScreenRoutes } from "@/helpers/config/site";
import { Clock8 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecentPostCardProps {
  id: string;
  imgSrc: string | null;
  imgAlt: string;
  badge: string;
  title: string;
  text: string;
  readTime: string;
}

const RecentPostCard: React.FC<RecentPostCardProps> = ({
  id,
  imgSrc,
  imgAlt,
  badge,
  title,
  text,
  readTime,
}) => {
  return (
    <div className="group grid sm:grid-cols-0.7fr-1fr grid-cols-1 items-start gap-9 mb-10 ">
      <figure className=" img-holder transition-all duration-250 ease rounded-lg   group-hover:-translate-y-1">
        <img
          src={imgSrc || ""}
          alt={imgAlt}
          loading="lazy"
          className="img-cover h-[250px]"
        />
      </figure>

      <div className="card-content">
        <a href="#" className="card-badge">
          {badge}
        </a>

        <h3 className="text-columbia-blue text-[24px] font-semibold mt-4 mb-5">
          <Link href={`${ScreenRoutes.POSTS}/${id}`} className="link hover-2 ">
            {title}
          </Link>
        </h3>

        <div className="card-text text-sm mb-1">{text.substring(0, 100)}</div>

        <div className="card-wrapper">
          <div className="wrapper text-right mt-3 mb-3">
            <span className="span text-sm flex justify-end mt-10">
              <Clock8 size={18} className="inline  mr-1" />3 Min Reads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
