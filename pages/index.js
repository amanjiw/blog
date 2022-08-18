import React from "react";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";
import Head from "next/head";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Amanj blog</title>
        <meta
          name="description"
          content="i post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  console.log(featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
