import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";
import serverAuth from "@/lib/serverAuth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const currentUser = await serverAuth();

    if (!currentUser?.email || !currentUser?.isAdmin) {
      return new NextResponse(
        "You do not have permission to access this resource.",
        { status: 403 }
      );
    }

    const { title, img } = body;

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if (!img) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    const category = await prismadb.category.create({
      data: {
        slug: title,
        title,
        img,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const category = await prismadb.category.findMany({});

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
