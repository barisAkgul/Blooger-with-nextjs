"use server";

import prismadb from "@/lib/prismadb";

export async function GetPosts({
  offset = 0,
  limit = 5,
}: {
  search?: string | undefined;
  offset?: number;
  limit?: number;
}) {
  const data = await prismadb.post.findMany({
    skip: offset,
    take: limit,
  });

  const totalCount = await prismadb.post.count({});
  const totalPages = Math.ceil(totalCount / limit);

  return { data, totalCount, totalPages };
}
