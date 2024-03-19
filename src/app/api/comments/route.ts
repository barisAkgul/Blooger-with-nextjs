import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";
import { NextResponse } from "next/server";

// // GET ALL COMMENTS OF A POST
// export const GET = async (req: Request) => {
//   const { searchParams } = new URL(req.url);

//   const postId = searchParams.get("postId");

//   try {
//     const comments = await prisma.comment.findMany({
//       where: {
//         ...(postId && { postId }),
//       },
//       include: { user: true },
//     });

//     return new NextResponse(JSON.stringify(comments, { status: 200 }));
//   } catch (err) {
//     // console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };

// CREATE A COMMENT
export const POST = async (req: Request) => {
  try {
    const session = await serverSession();

    if (!session?.user?.email) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const body = await req.json();
    const comment = await prismadb.comment.create({
      data: { ...body, userEmail: session?.user?.email },
    });
    return NextResponse.json({ comment });
  } catch (error) {
    console.log("[COMMENT_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
