import React from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="list of coding " />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1600,
  };
};

export default AllPostsPage;
