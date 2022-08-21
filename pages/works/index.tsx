import React from "react";
import fs from "fs";
import path from "path";
import { sortByDate } from "../../utils";

import {
  Blogs,
  CustomerLogo,
  Features,
  Posts,
  Testimonial,
} from "../../components/Works";
import matter from "gray-matter";
import { PostI } from "../../types";

const works = ({ posts }: { posts: PostI[] }) => {
  return (
    <>
      <Posts posts={posts} />
      <Blogs />
      <Features />
      <CustomerLogo />
      <Testimonial />
    </>
  );
};
export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default works;
