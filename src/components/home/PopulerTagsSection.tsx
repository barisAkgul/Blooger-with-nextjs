import React from "react";
import { Heading } from "../ui/heading";

const PopularTagsSection = () => {
  const popularTags = [
    {
      imgSrc: "./assets/images/tag1.png",
      imgAlt: "Travel",
      text: "Travel",
    },
    {
      imgSrc: "./assets/images/tag2.png",
      imgAlt: "Culture",
      text: "Culture",
    },
    {
      imgSrc: "./assets/images/tag3.png",
      imgAlt: "Lifestyle",
      text: "Lifestyle",
    },
    {
      imgSrc: "./assets/images/tag4.png",
      imgAlt: "Fashion",
      text: "Fashion",
    },
    {
      imgSrc: "./assets/images/tag5.png",
      imgAlt: "Food",
      text: "Food",
    },
    {
      imgSrc: "./assets/images/tag6.png",
      imgAlt: "Space",
      text: "Space",
    },
    {
      imgSrc: "./assets/images/tag7.png",
      imgAlt: "Animal",
      text: "Animal",
    },
    {
      imgSrc: "./assets/images/tag8.png",
      imgAlt: "Minimal",
      text: "Minimal",
    },
    {
      imgSrc: "./assets/images/tag9.png",
      imgAlt: "Interior",
      text: "Interior",
    },
    {
      imgSrc: "./assets/images/tag10.png",
      imgAlt: "Plant",
      text: "Plant",
    },
    {
      imgSrc: "./assets/images/tag11.png",
      imgAlt: "Nature",
      text: "Nature",
    },
    {
      imgSrc: "./assets/images/tag12.png",
      imgAlt: "Business",
      text: "Business",
    },
  ];

  return (
    <section className="tags mb-40" aria-labelledby="tag-label">
      <div className="container">
        <Heading
          variant="landing"
          title="Popular Tags"
          description="Most searched keywords"
        />

        <ul className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  ">
          {popularTags.map((tag, index) => (
            <li key={index}>
              <button className="w-full flex items-center gap-2 p-4 rounded-2xl bg-oxford-blue-2 border border-prussian-blue  tag-btn">
                <img
                  src={tag.imgSrc}
                  width={32}
                  height={32}
                  loading="lazy"
                  alt={tag.imgAlt}
                />
                <p className="btn-text">{tag.text}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularTagsSection;
