import prismadb from "@/lib/prismadb";

export const getTotalCommentCount = async (): Promise<number> => {
  const totalCommentCount = await prismadb.comment.count();

  return totalCommentCount;
};
