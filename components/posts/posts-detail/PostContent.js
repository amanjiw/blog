import React from "react";
import PostHeadr from "./PostHeadr";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "stasrt nextjs",
  image: "getting-started-nextjs.png",
  excerpt: "a react freamwork for bauild server side rendering",
  date: "2022-02-10",
  content: "# this is a first post",
};

// =>

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeadr title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
