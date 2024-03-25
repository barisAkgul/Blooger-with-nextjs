import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import PostsClient from "./components/client";

import { PostsColumn } from "./components/columns";
import serverSession from "@/lib/serverSession";

const PostsPage = async () => {
  const session = await serverSession();

  const posts = await prismadb.post.findMany({
    where: {
      userEmail: session?.user?.email,
    },
  });

  const formattedPosts: PostsColumn[] = posts.map((item) => ({
    id: item.id,
    title: item.title,
    img: item.img,
    cat: item.catSlug,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="container flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PostsClient data={formattedPosts} />
      </div>
    </div>
  );
};

export default PostsPage;
