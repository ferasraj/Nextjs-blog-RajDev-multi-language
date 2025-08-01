import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs, locale }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <div className="w-full inline-block">
      <article
        className={twMerge(
          "flex flex-col items-start justify-end mx-5 sm:mx-10 ",
          "relative h-[60vh] sm:h-[85vh]"
        )}
      >
        {" "}
        <div
          className={twMerge(
            "absolute top-0 left-0 bottom-0 right-0 h-full",
            "bg-gradient-to-b from-transparent from-0% to-dark/90",
            "rounded-3xl z-0 "
          )}
        />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          style={{ aspectRatio: "16 / 9" }}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          sizes="100vw"
          priority
        />
        <div
          className={twMerge(
            "w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 ",
            "flex flex-col items-start justify-center z-0 text-light"
          )}
        >
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />

          <Link href={`/blogs/${slug(blog.title[locale])}`} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className={twMerge(
                  "bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 ",
                  "   dark:to-accentDark/50 bg-[length:0px_6px]",
                  "hover:bg-[length:100%_6px] bg-no-repeat transition-[background-size] duration-500 ",
                  locale === "ar" ? "bg-right-bottom" : "bg-left-bottom"
                )}
              >
                {blog.title[locale]}{" "}
              </span>
            </h1>
          </Link>

          <p
            className={twMerge(
              "hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in",
              locale === "ar" ? "font-tajawal" : ""
            )}
          >
            {blog.description[locale]}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
