import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prismadb";
import { options } from "@/app/api/auth/[...nextauth]/options";
import serverSession from "./serverSession";

const serverAuth = async () => {
  const session = await serverSession();

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma?.user?.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return currentUser;
};

export default serverAuth;
