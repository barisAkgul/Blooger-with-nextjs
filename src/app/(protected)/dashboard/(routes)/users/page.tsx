import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { UsersClient } from "./components/client";
import { UsersColumn } from "./components/columns";

const UsersPage = async () => {
  const users = await prismadb.user.findMany();

  const formattedUsers: UsersColumn[] = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    img: user.img,
    isAdmin: user.isAdmin,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UsersClient data={formattedUsers} />
      </div>
    </div>
  );
};

export default UsersPage;
