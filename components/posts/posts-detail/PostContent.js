import React from "react";
import PostHeadr from "./PostHeadr";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

// =>

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeadr title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
