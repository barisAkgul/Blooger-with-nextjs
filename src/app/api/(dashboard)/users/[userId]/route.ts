import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prismadb from "@/lib/prismadb";

import serverAuth from "@/lib/serverAuth";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const currentUser = await serverAuth();

    if (!currentUser?.email || !currentUser?.isAdmin) {
      return new NextResponse(
        "You do not have permission to access this resource.",
        { status: 403 }
      );
    }

    if (!params.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const user = await prismadb.category.findUnique({
      where: {
        id: params.userId,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const currentUser = await serverAuth();

    if (!currentUser?.email || !currentUser?.isAdmin) {
      return new NextResponse(
        "You do not have permission to access this resource.",
        { status: 403 }
      );
    }

    const body = await req.json();

    const { name, email, img, password, isAdmin } = body;

    if (!name || !email) {
      return new NextResponse("Name, email, and image URL are required", {
        status: 400,
      });
    }

    let userDataToUpdate = { name, email, img, password, isAdmin };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      userDataToUpdate = { ...userDataToUpdate, password: hashedPassword };
    }

    const user = await prismadb.user.update({
      where: {
        id: params.userId,
      },
      data: userDataToUpdate,
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[USER_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const user = await prismadb.user.delete({
      where: {
        id: params.userId,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
