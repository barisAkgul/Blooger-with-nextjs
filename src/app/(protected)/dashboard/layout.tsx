import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import serverSession from "@/lib/serverSession";
import DahboardSidebar from "@/components/layouts/DahboardSidebar";

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

  if (!user || !user.isAdmin) {
    redirect("/");
  }

  return (
    <div className="flex">
      <DahboardSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
