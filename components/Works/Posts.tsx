import Link from "next/link";
import React from "react";
import { PostI } from "../../types";
import NoSsr from "../common/NoSsr";
import { motion } from "framer-motion";

const Posts = ({ posts }: { posts: PostI[] }) => {
  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Our Projects
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          <NoSsr>
            {posts.map((post) => (
              <Link key={post.slug} href={"./works/" + post.slug}>
                <a>
                  <article className="group cursor-pointer">
                    <motion.div
                      //   className=" aspect-square transition-all"
                      className="relative overflow-hidden rounded-md bg-gray-100    hover:scale-105 dark:bg-gray-800"
                      layoutId={post.slug + "hero_img"}
                      initial={false}
                      animate={false}
                    >
                      <img
                        src={post.frontmatter.cover_image}
                        className="h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <span className="mt-5 inline-block text-xs font-medium uppercase tracking-wider  text-emerald-700">
                        Personal Growth
                      </span>
                    </div>
                    <motion.h2
                      layoutId={post.slug + "heading"}
                      className="text-brand-primary mt-2 text-lg font-semibold tracking-normal dark:text-white"
                    >
                      <span className=" bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                        {post.frontmatter.title}
                      </span>
                    </motion.h2>
                    <div className="">
                      <p className="line-clamp-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        How do we become better every single day? We develop
                        practices that will help move us incrementally forward.
                        Small steps, taken consistently. This is the path to a
                        good life.
                      </p>
                    </div>
                    <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-3">
                        <div className="relative h-5 w-5 flex-shrink-0">
                          <img
                            alt="Erika Oliver"
                            src="https://cdn.sanity.io/images/cijrdavx/production/4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg?w=3840&q=75&fit=clip&auto=format"
                            decoding="async"
                            className="h-full w-full rounded-full object-cover"
                            sizes="30px"
                          />
                        </div>
                        <span className="text-sm">Erika Oliver</span>
                      </div>
                      <span className="text-xs text-gray-300 dark:text-gray-600">
                        •
                      </span>
                      <time className="text-sm" dateTime="2022-05-20T09:33:00Z">
                        May 20, 2022
                      </time>
                      <span>Read more</span>
                    </div>
                  </article>
                </a>
              </Link>
            ))}
          </NoSsr>
        </div>
      </div>
    </section>
  );
};

export default Posts;
