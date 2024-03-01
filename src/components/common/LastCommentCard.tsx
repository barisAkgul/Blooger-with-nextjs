import React from "react";

interface LastCommentCardProps {
  text: string;
  authorImgSrc: string;
  authorImgAlt: string;
  authorName: string;
  commentDate: string;
}

const LastCommentCard: React.FC<LastCommentCardProps> = ({
  text,
  authorImgSrc,
  authorImgAlt,
  authorName,
  commentDate,
}) => {
  return (
    <div className="comment-card mb-5 pb-5 border-b border-prussian-blue">
      <blockquote className="text-wild-blue-yonder text-sbase mb-5">
        {text}
      </blockquote>

      <div className="flex items-center gap-3 ">
        <figure className="card-banner img-holder rounded-full shrink-0">
          <img
            src={authorImgSrc}
            width="32"
            height="32"
            loading="lazy"
            alt={authorImgAlt}
          />
        </figure>
        <div className="text-xs">
          <p className="card-title">{authorName}</p>
          <time className="card-date " dateTime={commentDate}>
            {commentDate}
          </time>
        </div>
      </div>
    </div>
  );
};

export default LastCommentCard;
