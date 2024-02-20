import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prismadb";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, options);

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    return null;
  }

  return { currentUser };
};

export default serverAuth;
