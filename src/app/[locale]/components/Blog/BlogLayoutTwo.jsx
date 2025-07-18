"use client";
import { format } from "date-fns";
import { slug } from "github-slugger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const BlogLayoutTwo = ({ blog, locale }) => {
  const t = useTranslations("tags");
  const translated = t(slug(blog.tags[0]), { default: blog.tags[0] });

  return (
    <div className="group grid grid-cols-12 gap-4 items-center  text-dark dark:text-light">
      <Link
        href={`/blogs/${slug(blog.title[locale])}`}
        className=" col-span-12  sm:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className={twMerge(
            "aspect-square w-full sm:h-full  h-[25vh]",
            "object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          )}
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="col-span-12  lg:col-span-8 w-full ">
        <span
          className={twMerge(
            "inline-block w-full uppercase text-accent",
            "dark:text-accentDark font-semibold text-xs sm:text-lg"
          )}
        >
          {translated}
        </span>
        <Link
          href={`/blogs/${slug(blog.title[locale])}`}
          className="inline-block my-1 "
        >
          <h2
            className={twMerge(
              "font-semibold capitalize text-base sm:text-lg",
              "line-clamp-2 overflow-hidden text-ellipsis"
            )}
          >
            <span
              className={twMerge(
                "bg-gradient-to-r from-accent/50 dark:from-accentDark/50",
                "to-accent/50 dark:to-accentDark/50",
                "bg-[length:0px_2px] group-hover:bg-[length:100%_2px]",
                "bg-no-repeat transition-[background-size] duration-500",
                locale === "ar" ? "bg-right-bottom" : "bg-left-bottom",
                locale === "ar" ? "font-tajawal " : ""
              )}
            >
              {blog.title[locale]}
            </span>
          </h2>
        </Link>

        <span
          className={twMerge(
            "inline-block w-full capitalize text-gray",
            "dark:text0light/50 font-semibold  text-xs sm:text-base"
          )}
        >
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
