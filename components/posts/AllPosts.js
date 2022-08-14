import React from "react";
import PostsGrid from "./PostsGrid";
import classes from "./all-posts.module.css";

// =>

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
