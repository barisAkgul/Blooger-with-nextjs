import { Clock8 } from "lucide-react";
import React from "react";

interface RecentPostCardProps {
  imgSrc: string;
  imgAlt: string;
  badge: string;
  title: string;
  text: string;
  tags: string[];
  readTime: string;
}

const RecentPostCard: React.FC<RecentPostCardProps> = ({
  imgSrc,
  imgAlt,
  badge,
  title,
  text,
  tags,
  readTime,
}) => {
  return (
    <div className="group grid sm:grid-cols-0.7fr-1fr grid-cols-1 items-start gap-9 ">
      <figure className=" img-holder transition-all duration-250 ease rounded-lg   group-hover:-translate-y-1">
        <img src={imgSrc} alt={imgAlt} loading="lazy" className="img-cover" />
      </figure>

      <div className="card-content">
        <a href="#" className="card-badge">
          {badge}
        </a>

        <h3 className="text-columbia-blue text-2xl font-semibold mt-4 mb-5">
          <a href="#" className="link hover-2 ">
            {title}
          </a>
        </h3>

        <p className="card-text text-sm mb-1">{text}</p>

        <div className="card-wrapper">
          {/*     <div className="card-tag">
            {tags.map((tag, i) => (
              <a href="#" className="span hover-2" key={i}>
                {tag}
              </a>
            ))}
          </div> */}

          <div className="wrapper text-right mt-3 mb-3">
            {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}
            <span className="span">
              <Clock8 className="inline  mr-1  text-sm" />
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
