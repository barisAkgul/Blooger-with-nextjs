"use server";

import prismadb from "@/lib/prismadb";

export async function GetPosts({
  offset = 0,
  limit = 5,
}: {
  offset?: number;
  limit?: number;
}) {
  const data = await prismadb.post.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
  const totalCount = await prismadb.post.count({});
  const totalPages = Math.ceil(totalCount / limit);

  return { data, totalCount, totalPages };
}
