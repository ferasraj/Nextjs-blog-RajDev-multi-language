"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { useEffect } from "react";

const mdxComponent = {
  Image,
};

const RenderMdx = ({ blog, locale }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  useEffect(() => {
    if (locale === "ar") {
      const translate = async () => {
        const elements = document.querySelectorAll(".mdx-content *");

        for (let el of elements) {
          if (
            el.closest("pre") ||
            el.closest("code") ||
            el.closest("[data-rehype-pretty-code-fragment]")
          ) {
            continue;
          }

          if (!el.dataset.original) {
            el.dataset.original = el.innerText;
          }

          const originalText = el.dataset.original.trim();
          if (!originalText) continue;

          const storageKey = `translated:${originalText}`;
          const cached = localStorage.getItem(storageKey);

          if (cached) {
            el.innerText = cached;
          } else {
            try {
              const res = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURIComponent(
                  originalText
                )}`
              );
              const data = await res.json();
              const translated = data[0].map((d) => d[0]).join("");

              el.innerText = translated;
              localStorage.setItem(storageKey, translated);
            } catch (err) {
              console.error("💥 فشل الترجمة:", err);
            }
          }
        }
      };

      const timer = setTimeout(() => {
        translate();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [locale]);

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="mdx-content col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
        prose-blockquote:bg-accent/20 
        prose-blockquote:p-2
        prose-blockquote:px-6
        prose-blockquote:border-accent
        prose-blockquote:not-italic
        prose-blockquote:rounded-r-lg

        prose-li:marker:text-accent

        dark:prose-invert
        dark:prose-blockquote:border-accentDark
        dark:prose-blockquote:bg-accentDark/20
        dark:prose-li:marker:text-accentDark

        first-letter:text-3xl
        sm:first-letter:text-5xl"
    >
      <MDXContent components={mdxComponent} />
    </div>
  );
};

export default RenderMdx;
