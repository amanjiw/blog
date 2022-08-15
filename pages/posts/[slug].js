import React from "react";
import PostContent from "../../components/posts/posts-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function SingleDetailPage() {
  return (
    <div>
      <PostContent />
    </div>
  );
}

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },

    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

export default SingleDetailPage;
