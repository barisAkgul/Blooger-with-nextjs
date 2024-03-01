import React from "react";
import LastCommentCard from "../common/LastCommentCard";

const lastComments = [
  {
    text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner",
    authorImgSrc: "./assets/images/author-6.png",
    authorImgAlt: "Jane Cooper",
    authorName: "Jane Cooper",
    commentDate: "2022-04-15",
  },
  {
    text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner",
    authorImgSrc: "./assets/images/author-7.png",
    authorImgAlt: "Katen Doe",
    authorName: "Katen Doe",
    commentDate: "2022-04-15",
  },
  {
    text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner",
    authorImgSrc: "./assets/images/author-8.png",
    authorImgAlt: "Barbara Cartland",
    authorName: "Barbara Cartland",
    commentDate: "2022-04-15",
  },
];

const LastComments = () => {
  return (
    <div className="card aside-card bg-oxford-blue-2 border-2 border-prussian-blue rounded-2xl p-6">
      <h3 className="text-xl font-bold tracking-tight text-transparent-background-clip relative mb-10">
        <span className="mb-2">Popular Posts</span>
        <span className="absolute left-0 bottom-0 w-24 h-1 bg-carolina-blue mt-2"></span>
      </h3>

      <ul className="comment-list">
        {lastComments.map((comment, index) => (
          <li key={index}>
            <LastCommentCard {...comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastComments;
