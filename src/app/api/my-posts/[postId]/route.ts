import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const session = await serverSession();

    if (!session?.user?.email) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.postId) {
      return new NextResponse("Post id is required", { status: 400 });
    }

    const post = await prismadb.post.delete({
      where: {
        id: params.postId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("[POST_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const session = await serverSession();

    const body = await req.json();

    const { name, images, categoryName, desc } = body;

    if (!session?.user?.email) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!images) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    if (!categoryName) {
      return new NextResponse("Category Name is required", { status: 400 });
    }

    if (!desc) {
      return new NextResponse("Description id is required", { status: 400 });
    }

    const post = await prismadb.post.update({
      where: {
        id: params.postId,
      },
      data: {
        slug: name,
        title: name,
        desc: desc,
        img: images,
        catSlug: categoryName,
        userEmail: session?.user?.email,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("[POST_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
