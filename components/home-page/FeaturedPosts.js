import React from "react";
import PostsGrid from "../posts/PostsGrid";
import classes from "./featured-posts.module.css";

// =>

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
