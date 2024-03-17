import LastComments from "@/components/home/LastComments";
import PopularPosts from "@/components/home/PopulerPosts";
import RecentPostsSection from "@/components/home/RecentPostsSection";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";

const BlogPage = ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    limit?: string;
  };
}) => {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 5;
  return (
    <div className="container min-h-[100vh] pt-10">
      <Heading
        variant="landing"
        title="Travel Blog Posts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      />
      <Separator className="mt-[-30px] mb-[20px]" />
      <section
        className="section recent-post"
        id="recent"
        aria-labelledby="recent-label"
      >
        <div className="container grid grid-cols-1fr-0.6fr items-start gap-14">
          {/* @ts-ignore */}
          <RecentPostsSection currentPage={currentPage} limit={limit} />

          <div className="post-aside grid gap-7">
            <PopularPosts />
            <LastComments />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
