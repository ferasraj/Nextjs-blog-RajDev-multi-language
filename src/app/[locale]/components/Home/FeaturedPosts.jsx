"use client";
import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

const FeaturedPosts = ({ blogs, locale }) => {
  const t = useTranslations("FeaturedPosts");
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section
      className={twMerge(
        "w-full h-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  xl:px-32",
        "flex flex-col items-center justify-center"
      )}
    >
      <h2
        className={twMerge(
          "w-full inline-block font-bold capitalize text-2xl",
          "md:text-4xl text-dark dark:text-light"
        )}
      >
        {t("Featured-Posts")}{" "}
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className="col-span-2 xl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} locale={locale} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} locale={locale} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} locale={locale} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
