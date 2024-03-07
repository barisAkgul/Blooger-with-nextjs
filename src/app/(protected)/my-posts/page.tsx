import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import PostsClient from "./components/client";

import { PostsColumn } from "./components/columns";

const PostsPage = async () => {
  const posts = await prismadb.post.findMany();

  const formattedPosts: PostsColumn[] = posts.map((item) => ({
    id: item.id,
    title: item.title,
    img: item.img,
    cat: item.catSlug,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PostsClient data={formattedPosts} />
      </div>
    </div>
  );
};

export default PostsPage;
