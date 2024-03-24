import prismadb from "@/lib/prismadb";

export const getTotalUserCount = async (): Promise<number> => {
  const totalUserCount = await prismadb.user.count();

  return totalUserCount;
};
