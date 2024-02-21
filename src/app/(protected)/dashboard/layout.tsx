import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await serverSession();

  if (!session?.user?.email) {
    redirect("/");
  }

  const user = await prismadb.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  console.log(session);

  if (!user || !user.isAdmin) {
    redirect("/");
  }

  return <>{children}</>;
}
