"use client";
import { sortBlogs } from "@/src/utils";
import { Link } from "@/src/i18n/navigation";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

const RecentPosts = ({ blogs, locale }) => {
  const sortedBlogs = sortBlogs(blogs);
  const t = useTranslations("RecentPosts");

  return (
    <section
      className={twMerge(
        "w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24 ",
        "xl:px-32 flex flex-col items-center justify-center"
      )}
    >
      <div className="w-full flex  justify-between">
        <h2
          className={twMerge(
            "w-fit inline-block font-bold capitalize",
            " text-2xl md:text-4xl text-dark dark:text-light"
          )}
        >
          {t("Recent-Posts")}{" "}
        </h2>
        <Link
          href="/categories/all"
          className={twMerge(
            "inline-block font-medium text-accent",
            "dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
          )}
        >
          {t("view-all")}{" "}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} locale={locale} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
