import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postDirectory);
};

export const getPostData = (postIdentifire) => {
  const postSlug = postIdentifire.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPost = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPost;
};

export const getFeaturedPosts = () => {
  const allPost = getAllPosts();
  console.log(allPost);

  const featuredPosts = allPost.filter((post) => post.isFeatured);

  return featuredPosts;
};
