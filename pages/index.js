import React from "react";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "stasrt nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "a react freamwork for bauild server side rendering",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "stasrt nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "a react freamwork for bauild server side rendering",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "stasrt nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "a react freamwork for bauild server side rendering",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "stasrt nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "a react freamwork for bauild server side rendering",
    date: "2022-02-10",
  },

];

function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}

export default HomePage;
