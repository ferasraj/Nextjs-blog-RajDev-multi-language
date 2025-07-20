"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const TOC = ({ toc, locale }) => {
  const [translatedToc, setTranslatedToc] = useState(toc);

  useEffect(() => {
    const translate = async () => {
      if (locale !== "ar") {
        setTranslatedToc(toc);
        return;
      }

      const translated = await Promise.all(
        toc.map(async (heading) => {
          const res = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURIComponent(
              heading.text
            )}`
          );
          const data = await res.json();
          return {
            ...heading,
            text: data[0].map((d) => d[0]).join(""),
          };
        })
      );

      setTranslatedToc(translated);
    };

    translate();
  }, [locale, toc]);

  return (
    <details
      className={twMerge(
        "border border-solid border-accent/30 dark:border-light",
        "text-dark dark:text-light rounded-lg p-4 sticky top-5 max-h-[100vh]",
        "overflow-hidden overflow-y-auto"
      )}
      open
    >
      <summary className="text-lg font-semibold capitalize cursor-pointer">
        {locale === "ar" ? "جدول المحتويات" : "Table Of Content"}
      </summary>

      <ul className="mt-4 font-in text-base">
        {translatedToc.map((heading) => (
          <li key={`#${heading.slug}`} className="py-1">
            <a
              href={`#${heading.slug}`}
              data-level={heading.level}
              className={twMerge(
                "data-[level=two]:pl-0",
                "data-[level=two]:pt-2",
                "data-[level=two]:text-lg",
                "data-[level=two]:border-t border-solid border-accent/30 dark:border-light",
                "data-[level=three]:pl-4",
                "sm:data-[level=three]:pl-6",
                "flex items-center justify-start"
              )}
            >
              {heading.level === "three" && (
                <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                  &nbsp;
                </span>
              )}
              <span
                className={twMerge(
                  heading.level === "three" ? "hover:underline" : undefined
                )}
              >
                {heading.text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default TOC;
