import { Heading } from "@/components/ui/heading";
import React from "react";

import prismadb from "@/lib/prismadb";

type Props = {};

// const getData = async (slug: string) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  // const data = await getData(postId);
  const post = await prismadb.post.findUnique({
    where: {
      id: "clt78nliu00011i7mkmsyra0r",
    },
  });

  console.log(postId);

  return (
    <div className="container min-h-[100vh] pt-[60px] flex flex-col items-center">
      <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-transparent-background-clip text-center pr-[40px] pl-[40px]">
        Travel Blog Posts Lorem ipsum dolor sit amet, consectetur adipiscing
        elit
      </h2>

      <div className="flex items-center gap-3  mt-[20px] ">
        <figure className="card-banner img-holder rounded-full shrink-0">
          <img
            src={"/assets/images/author-2.png"}
            width="56"
            height="56"
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

      <div className="image-detail mb-30 mt-[30px]">
        <img
          className="rounded-[16px]"
          src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/single/img6.jpg"
          alt="Genz"
        />
      </div>

      <div className="lg:max-w-[820px] text-left pt-10 leading-6 ">
        {/* @ts-ignore */}
        <div dangerouslySetInnerHTML={{ __html: post?.desc }} />
      </div>
    </div>
  );
};

export default SinglePostPage;
