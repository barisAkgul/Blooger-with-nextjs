import React from "react";
import PopularPostCard from "../common/PopularPostCard";

const PopularPosts = () => {
  const popularPosts = [
    {
      imgSrc: "./assets/images/popular-post-1.jpg",
      imgAlt: "Creating is a privilege but it’s also a gift",
      title: "Creating is a privilege but it’s also a gift",
      readTime: "15 mins read",
      publishDate: "2022-04-15",
    },
    {
      imgSrc: "./assets/images/popular-post-2.jpg",
      imgAlt: "Being unique is better than being perfect",
      title: "Being unique is better than being perfect",
      readTime: "15 mins read",
      publishDate: "2022-04-15",
    },
    {
      imgSrc: "./assets/images/popular-post-3.jpg",
      imgAlt: "Every day, in every city and town across the country",
      title: "Every day, in every city and town across the country",
      readTime: "15 mins read",
      publishDate: "2022-04-15",
    },
    {
      imgSrc: "./assets/images/popular-post-4.jpg",
      imgAlt: "Your voice, your mind, your story, your vision",
      title: "Your voice, your mind, your story, your vision",
      readTime: "15 mins read",
      publishDate: "2022-04-15",
    },
    {
      imgSrc: "./assets/images/popular-post-4.jpg",
      imgAlt: "Being unique is better than being perfect",
      title: "Being unique is better than being perfect",
      readTime: "15 mins read",
      publishDate: "2022-04-15",
    },
  ];

  return (
    <div className="card aside-card bg-oxford-blue-2 border-2 border-prussian-blue rounded-2xl p-6">
      <h3 className="text-xl font-bold tracking-tight text-transparent-background-clip relative mb-4">
        <span className="mb-2">Popular Posts</span>
        <span className="absolute left-0 bottom-0 w-24 h-1 bg-carolina-blue mt-2"></span>
      </h3>

      <ul className="popular-list">
        {popularPosts.map((post, index) => (
          <PopularPostCard key={index} {...post} />
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;
