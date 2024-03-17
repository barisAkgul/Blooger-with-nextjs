import { format } from "date-fns";
import { Suspense } from "react";

import RecentPostCard from "../common/RecentPostCard";
import Pagination from "../common/Pagination";
import { Heading } from "../ui/heading";

import { GetPosts } from "@/actions/getPostsWithPagination";

interface IRecentPosts {
  currentPage: number;
  limit: number;
}

export default async function RecentPostsSection({
  currentPage,
  limit,
}: IRecentPosts) {
  const offset = (currentPage - 1) * limit;

  const { data, totalPages } = await GetPosts({ offset });

  return (
    <div className="post-main" id="posts">
      <Heading
        variant="landing"
        title="Recent posts"
        description="Don't miss the latest trends"
      />

      <Suspense key={currentPage} fallback={"Loading"}>
        <ul className="grid gap-14">
          {data.map((post, index) => (
            <li key={index}>
              <RecentPostCard
                id={post.id}
                imgSrc={post.img}
                imgAlt={post.title}
                badge={post.catSlug}
                title={post.title}
                text={post.desc}
                readTime={format(post.createdAt, "MMMM do, yyyy")}
              />
            </li>
          ))}
        </ul>
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
