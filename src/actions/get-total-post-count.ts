import prismadb from "@/lib/prismadb";

export const getTotalPostCount = async (): Promise<number> => {
  const totalPostCount = await prismadb.post.count();

  return totalPostCount;
};
