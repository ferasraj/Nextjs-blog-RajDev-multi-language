"use client";
import { format } from "date-fns";
import { slug } from "github-slugger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const BlogLayoutThree = ({ blog, locale }) => {
  const t = useTranslations("tags");
  const translated = t(slug(blog.tags[0]), { default: blog.tags[0] });

  return (
    <div className="group flex flex-col items-center text-black ">
      <Link
        href={blog.url}
        className="h-full rounded-xl overflow-hidden 
        dark:border-0 border-[1px] border-solid 
        border-black/10"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className={twMerge(
            " aspect-[4/3] w-full h-full object-cover",
            " group-hover:scale-105 transition-all ease duration-300 "
          )}
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span
          className={twMerge(
            "uppercase text-accent dark:text-accentDark  font-semibold text-xs sm:text-lg"
          )}
        >
          {translated}
        </span>
        <Link href={blog.url} className="inline-block my-1 ">
          <h2
            className={twMerge(
              "font-semibold capitalize  text-base sm:text-lg",
              "line-clamp-3 overflow-hidden text-ellipsis"
            )}
          >
            <span
              className={twMerge(
                "bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50",
                "bg-[length:0px_3px] group-hover:bg-[length:100%_3px]",
                locale === "ar" ? "bg-right-bottom" : "bg-left-bottom",
                "bg-no-repeat transition-[background-size] duration-500",
                "text-dark dark:text-light",
                locale === "ar" ? "font-tajawal " : ""
              )}
            >
              {blog.title[locale]}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray  font-semibold text-sm  sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
