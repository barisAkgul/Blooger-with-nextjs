import LastComments from "@/components/home/LastComments";
import PopularPosts from "@/components/home/PopulerPosts";
import RecentPostsSection from "@/components/home/RecentPostsSection";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const BlogPage = (props: Props) => {
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
          <RecentPostsSection />

          <div className="post-aside grid gap-7">
            <PopularPosts />
            <LastComments />
            {/* <InstagramCards /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
