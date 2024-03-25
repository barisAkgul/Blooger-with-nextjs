import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import bcrypt from "bcrypt";

export async function GET(req: Request) {
  try {
    const currentUser = await serverAuth();

    if (!currentUser?.email || !currentUser?.isAdmin) {
      return new NextResponse(
        "You do not have permission to access this resource.",
        { status: 403 }
      );
    }
    const user = await prismadb.user.findMany({});

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
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

    console.log(password);

    if (!name || !email || !password) {
      return new NextResponse("Name, email,password are required", {
        status: 400,
      });
    }

    let userDataToUpdate = { name, email, img, password, isAdmin };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      userDataToUpdate = { ...userDataToUpdate, password: hashedPassword };
    }

    const user = await prismadb.user.create({
      data: userDataToUpdate,
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("[USER_PATCH]", error);
    return new NextResponse(error.message, { status: 500 });
  }
}
