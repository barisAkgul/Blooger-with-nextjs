import { Heading } from "@/components/ui/heading";
import React from "react";

import prismadb from "@/lib/prismadb";
import CommentForm from "@/components/ui/comment-form";
import CommentsSection from "@/components/ui/comments";
import UserCard from "@/components/common/UserCard";

const SinglePostPage = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  // const data = await getData(postId);
  const post = await prismadb.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    return "Page not found";
  }

  return (
    <div className="container min-h-[100vh] pt-[60px] flex flex-col items-center">
      <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-transparent-background-clip text-center pr-[40px] pl-[40px]">
        {post?.title}
      </h2>

      {/* @ts-ignore */}
      <UserCard email={post.userEmail} date={post.createdAt} variant="lg" />

      <div className="image-detail mb-30 mt-[30px]">
        <img
          className="rounded-[16px]"
          src={post?.img || "/FALLBACKPOSTIMG.jpg"}
          alt="Genz"
        />
      </div>

      <div className="lg:max-w-[820px] text-left pt-10 leading-6 ">
        {/* @ts-ignore */}
        <div dangerouslySetInnerHTML={{ __html: post?.content }} />
      </div>

      <div className="comment-card mb-20  pb-20 mt-20  pt-20 border-b  border-t border-prussian-blue w-full lg:max-w-[820px]">
        <CommentForm postId={postId} />
      </div>
      <div className="comment-card mb-20  pb-20   border-b border-prussian-blue w-full lg:max-w-[820px]">
        {/* @ts-ignore */}
        <CommentsSection postId={post?.id} />
      </div>
    </div>
  );
};

export default SinglePostPage;
