import React from "react";

import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

interface UserCardProps {
  email: string;
  date: Date;
  variant: "xs" | "md" | "lg";
}

export const getSize = (variant: "xs" | "md" | "lg") => {
  switch (variant) {
    case "xs":
      return {
        imgSize: "32px",
        imgWidth: "32px",
        imgHeight: "32px",
        textSize: "text-xs",
      };
    case "md":
      return {
        imgSize: "48px",
        imgWidth: "48px",
        imgHeight: "48px",
        textSize: "text-base",
      };
    case "lg":
      return {
        imgSize: "64px",
        imgWidth: "64px",
        imgHeight: "64px",
        textSize: "text-lg",
      };
    default:
      return {
        imgSize: "48px",
        imgWidth: "48px",
        imgHeight: "48px",
        textSize: "text-base",
      };
  }
};

const UserCard = async ({ email, date, variant }: UserCardProps) => {
  const { imgSize, imgWidth, imgHeight, textSize } = getSize(variant);

  const formatDate = format(date, "MMMM do, yyyy");

  const user = await prismadb.user.findFirst({
    where: {
      email: email,
    },
  });

  return (
    <div className="flex items-center gap-3 mt-[20px]">
      <figure className="card-banner img-holder rounded-full shrink-0">
        <img
          src={user?.img}
          width={imgWidth}
          height={imgHeight}
          loading="lazy"
          alt={user?.name}
          style={{ width: imgSize, height: imgSize }}
          className=" object-cover"
        />
      </figure>
      <div className={`text-base ${textSize}`}>
        <p className="card-title font-semibold">{user?.name}</p>
        <time className="card-date" dateTime={formatDate}>
          {formatDate}
        </time>
      </div>
    </div>
  );
};

export default UserCard;
