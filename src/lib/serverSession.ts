import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prismadb";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const serverSession = async () => {
  const session = await getServerSession(options);

  if (!session?.user?.email) {
    return undefined;
  }

  return session;
};

export default serverSession;
