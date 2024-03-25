import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await serverSession();

  console.log("protected root", session);

  if (!session?.user?.email) {
    redirect("/");
  }

  return <>{children}</>;
}
