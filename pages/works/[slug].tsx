import matter from "gray-matter";
import path from "path";
import fs from "fs";
import React from "react";
import { marked } from "marked";
import { motion } from "framer-motion";

type SingleWorkType = {
  frontmatter: {
    title: string;
    date: Date;
    cover_image: string;
  };
  slug: string;
  content: string;
};
const SingleWork = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: SingleWorkType) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4  lg:py-16 lg:px-12">
        <motion.h1
          layoutId={slug + "heading"}
          className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.img
          layoutId={slug + "hero_img"}
          src={cover_image}
          className="my-4 h-96 w-full rounded object-cover"
        />
        <div
          className="mb-8 font-normal text-gray-500 dark:text-gray-400 sm:text-xl"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
    </section>
  );
};

export default SingleWork;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
