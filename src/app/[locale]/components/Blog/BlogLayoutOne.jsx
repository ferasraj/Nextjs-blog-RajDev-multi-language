import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";
import { twMerge } from "tailwind-merge";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group h-full inline-block overflow-hidden rounded-xl w-full">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full w-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className={twMerge(
          "w-full h-[50vh] sm:h-full  object-[50%_center] object-cover rounded-xl",
          "group-hover:scale-105 transition-all ease duration-300"
        )}
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="w-fit absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="text-xs !border "
        />
        <Link href={blog.url} className="mt-6">
          <h2
            className={twMerge(
              "font-bold capitalize text-sm xs:text-base",
              "sm:text-xl md:text-2xl text-light mt-2 sm:mt-4"
            )}
          >
            <span
              className={twMerge(
                "bg-gradient-to-r from-accent to-accent bg-[length:0px_3px]",
                "dark:from-accentDark/50 dark:to-accentDark/50",
                "group-hover:bg-[length:100%_3px] bg-left-bottom",
                "bg-no-repeat transition-[background-size] duration-500 "
              )}
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
