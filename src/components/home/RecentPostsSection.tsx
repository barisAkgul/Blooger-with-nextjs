import Pagination from "../common/Pagination";
import RecentPostCard from "../common/RecentPostCard";
import { Heading } from "../ui/heading";

const RecentPostsSection = () => {
  const recentPosts = [
    {
      imgSrc: "./assets/images/recent-post-1.jpg",
      imgAlt: "Helpful Tips for Working from Home as a Freelancer",
      badge: "Working Tips",
      title: "Helpful Tips for Working from Home as a Freelancer",
      text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
      tags: ["# Travel", "# Lifestyle"],
      readTime: "3 mins read",
    },
    {
      imgSrc: "./assets/images/recent-post-2.jpg",
      imgAlt: "Helpful Tips for Working from Home as a Freelancer",
      badge: "Working Tips",
      title: "Helpful Tips for Working from Home as a Freelancer",
      text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
      tags: ["# Travel", "# Lifestyle"],
      readTime: "3 mins read",
    },
    {
      imgSrc: "./assets/images/recent-post-3.jpg",
      imgAlt: "Helpful Tips for Working from Home as a Freelancer",
      badge: "Working Tips",
      title: "Helpful Tips for Working from Home as a Freelancer",
      text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
      tags: ["# Travel", "# Lifestyle"],
      readTime: "3 mins read",
    },
    {
      imgSrc: "./assets/images/recent-post-4.jpg",
      imgAlt: "Helpful Tips for Working from Home as a Freelancer",
      badge: "Working Tips",
      title: "Helpful Tips for Working from Home as a Freelancer",
      text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
      tags: ["# Travel", "# Lifestyle"],
      readTime: "3 mins read",
    },
    {
      imgSrc: "./assets/images/recent-post-5.jpg",
      imgAlt: "Helpful Tips for Working from Home as a Freelancer",
      badge: "Working Tips",
      title: "Helpful Tips for Working from Home as a Freelancer",
      text: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
      tags: ["# Travel", "# Lifestyle"],
      readTime: "3 mins read",
    },
  ];

  return (
    <div className="post-main">
      <Heading
        variant="landing"
        title="Recent posts"
        description="Don't miss the latest trends"
      />

      <ul className="grid gap-14">
        {recentPosts.map((post, index) => (
          <li key={index}>
            <RecentPostCard
              imgSrc={post.imgSrc}
              imgAlt={post.imgAlt}
              badge={post.badge}
              title={post.title}
              text={post.text}
              tags={post.tags}
              readTime={post.readTime}
            />
          </li>
        ))}
      </ul>

      <Pagination page={2} hasPrev={true} hasNext={false} />
    </div>
  );
};

export default RecentPostsSection;
