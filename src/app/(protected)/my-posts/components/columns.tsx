"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { CellAction } from "./cell-action";

export type PostsColumn = {
  id: string;
  title: string;
  img: string | null;
  cat: String;
  createdAt: string;
};

export const columns: ColumnDef<PostsColumn>[] = [
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="relative w-[40px] h-[40px]  flex gap-2 items-center">
          <Image
            fill
            className="object-cover rounded-full"
            src={row.getValue("img")}
            alt="post-image"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "cat",
    header: "Category",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
