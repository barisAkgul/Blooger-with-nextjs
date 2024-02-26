import React from "react";

interface PopularPostCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  readTime: string;
  publishDate: string;
}

const PopularPostCard: React.FC<PopularPostCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  readTime,
  publishDate,
}) => {
  return (
    <li>
      <div className="flex aling-start gap-3 mt-6">
        <figure
          className="card-banner img-holder rounded-full shrink-0"
          style={{ width: "64px", height: "64px" }}
        >
          <img
            src={imgSrc}
            width="64"
            height="64"
            alt={imgAlt}
            loading="lazy"
            className="img-cover"
          />
        </figure>

        <div className="flex flex-col border-b border-prussian-blue">
          <h4 className="text-columbia-blue text-lg font-semibold ">
            <a href="#" className="link hover-2 ">
              {title}
            </a>
          </h4>

          <div className="flex text-sm justify-start gap-5 mt-3 mb-4 ">
            <p className="card-subtitle">{readTime}</p>

            <time className="publish-date" dateTime={publishDate}>
              {publishDate}
            </time>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PopularPostCard;
