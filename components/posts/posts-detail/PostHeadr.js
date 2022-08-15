import React from "react";
import Image from "next/image";
import classes from "./post-header.module.css";

// =>

function PostHeadr({ title, image }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={100} />
    </header>
  );
}

export default PostHeadr;
