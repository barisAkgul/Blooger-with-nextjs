import React from "react";

type Props = {};

const CommentsSection = (props: Props) => {
  return (
    <div>
      <h2 className="text-columbia-blue text-3xl font-semibold mt-4 mb-5">
        Comments
      </h2>

      <div>
        <div className="flex items-center gap-3  mt-[20px] ">
          <figure className="card-banner img-holder rounded-full shrink-0">
            <img
              src={"/assets/images/author-2.png"}
              width="48"
              height="48"
              loading="lazy"
              alt={"Jane Cooper"}
            />
          </figure>
          <div className="text-base">
            <p className="card-title font-semibold">{"Jane Cooper"}</p>
            <time className="card-date " dateTime={"2022-04-15"}>
              {"2022-04-15"}
            </time>
          </div>
        </div>

        <div className="border bg-oxford-blue-2 border-prussian-blue p-[20px] text-lg rounded-[16px] mt-6">
          White white dreamy drama tically place everything although. Place out
          apartment afternoon whimsical kinder, little romantic joy we flowers
          handmade.
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
