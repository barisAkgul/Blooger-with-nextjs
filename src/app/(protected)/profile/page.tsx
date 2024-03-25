import prismadb from "@/lib/prismadb";

import { UserForm } from "./components/user-form";
import serverSession from "@/lib/serverSession";

const UserProfilePage = async () => {
  const session = await serverSession();

  const user = await prismadb.user.findUnique({
    where: { email: session?.user?.email },
  });

  return (
    <div className="container flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UserForm initialData={user} />
      </div>
    </div>
  );
};

export default UserProfilePage;
