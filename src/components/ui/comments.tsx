import React from "react";
import UserCard from "../common/UserCard";

import prismadb from "@/lib/prismadb";

type CommentsSectionProps = { postId: string };

const CommentsSection = async ({ postId }: CommentsSectionProps) => {
  const comments = await prismadb.comment.findMany({
    where: {
      postId: postId,
    },
  });

  console.log(comments);

  return (
    <div>
      <h2 className="text-columbia-blue text-3xl font-semibold mt-4 mb-5">
        Comments
      </h2>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div>
              {/* @ts-ignore */}
              <UserCard
                email={comment.userEmail}
                date={comment.createdAt}
                variant="md"
              />
            </div>

            <div className="border bg-oxford-blue-2 border-prussian-blue p-[20px] text-lg rounded-[16px] mt-6">
              {comment.comment}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsSection;
