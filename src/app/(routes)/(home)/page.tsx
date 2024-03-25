import HeroSection from "@/components/home/HeroSection";
import LastComments from "@/components/home/LastComments";
import PopularPosts from "@/components/home/PopulerPosts";
import PopularTagsSection from "@/components/home/PopulerTagsSection";
import RecentPostsSection from "@/components/home/RecentPostsSection";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    limit?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 5;
  return (
    <>
      <HeroSection />

      {/* @ts-ignore */}
      <PopularTagsSection />
      <section
        className="section recent-post"
        id="recent"
        aria-labelledby="recent-label"
      >
        <div className="container grid grid-cols-1fr-0.6fr items-start gap-14">
          {/* @ts-ignore */}
          <RecentPostsSection currentPage={currentPage} limit={limit} />

          <div className="post-aside grid gap-7">
            <PopularPosts />
            <LastComments />
          </div>
        </div>
      </section>
    </>
  );
}
