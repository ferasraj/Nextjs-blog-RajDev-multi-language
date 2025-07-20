import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";
import { useLocale, useTranslations } from "next-intl";
import { enUS, arSA } from "date-fns/locale";
// import toArabicDigits from "../../../../../lib/toArabicDigits"; // نكتبه تحت

const BlogDetails = ({ blog, slug: blogSlug }) => {
  const locale = useLocale();
  const currentLocale = locale === "ar" ? arSA : enUS;
  const minutes = blog.readingTime.minutesRounded;
  const readingText =
    locale === "ar"
      ? // ? `${toArabicDigits(minutes)} دقيقة قراءة`
        `${minutes} دقيقة قراءة`
      : `${minutes} min read`;

  const t = useTranslations("tags");
  const translated = t(slug(blog.tags[0]), { default: blog.tags[0] });

  return (
    <div
      className={twMerge(
        "px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark ",
        "py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium ",
        "mx-5  md:mx-10 rounded-lg"
      )}
    >
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy", {
          locale: currentLocale,
        })}
      </time>
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div className="m-3">{readingText}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{translated}
      </Link>
    </div>
  );
};

export default BlogDetails;
