import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const session = await serverSession();

    const { name, images, categoryName, desc, content } = body;

    if (!session?.user?.email) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!images) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    const post = await prismadb.post.create({
      data: {
        slug: name,
        title: name,
        desc: desc,
        content: content,
        img: images,
        catSlug: categoryName,
        userEmail: session?.user?.email,
      },
    });

    return NextResponse.json({ post });
  } catch (error) {
    console.log("[POST_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const post = await prismadb.post.findMany({});

    return NextResponse.json(post);
  } catch (error) {
    console.log("[POST_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
