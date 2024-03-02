import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

// GET SINGLE POST
export const GET = async (
  req: Request,
  { params }: { params: { postId: string } }
) => {
  const { postId: id } = params;

  try {
    const post = await prismadb.post.update({
      where: { id },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return NextResponse.json(post);
  } catch (err) {
    console.log("[POST_GET]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
