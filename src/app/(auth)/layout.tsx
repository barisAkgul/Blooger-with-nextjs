import serverSession from "@/lib/serverSession";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await serverSession();

  if (session?.user?.email) {
    redirect("/");
  }
  return <>{children}</>;
}
