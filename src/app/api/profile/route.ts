import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";

export async function PATCH(req: Request) {
  try {
    const session = await serverSession();

    const body = await req.json();

    const { name, email, img, password } = body;

    if (!session?.user?.email) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
    if (!name || !email) {
      return new NextResponse("Name, email are required", {
        status: 400,
      });
    }

    let userDataToUpdate = { name, email, img, password };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      userDataToUpdate = { ...userDataToUpdate, password: hashedPassword };
    }

    console.log(userDataToUpdate);

    const user = await prismadb.user.update({
      where: {
        email: session?.user?.email,
      },
      data: userDataToUpdate,
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[PROFILE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await serverSession();

    if (!session?.user?.email) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const user = await prismadb.user.delete({
      where: {
        email: session?.user?.email,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[PROFILE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
