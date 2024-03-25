"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { CellAction } from "./cell-action";

// import { CellAction } from "./cell-action"

export type UsersColumn = {
  id: string;
  name: string;
  email: string;
  img: String;
  isAdmin: boolean;
};

export const columns: ColumnDef<UsersColumn>[] = [
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="relative w-[40px] h-[40px]  flex gap-2 items-center">
          <Image
            fill={true}
            className="object-cover rounded-full"
            src={row.getValue("img") || "/FALLBACKUSERIMG.png"}
            alt="user-image"
            sizes="(min-width: 808px) 5vw, 100vw"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
