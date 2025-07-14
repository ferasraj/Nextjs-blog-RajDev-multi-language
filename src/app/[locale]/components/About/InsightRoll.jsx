"use client";

import { useTranslations } from "next-intl";
import { twJoin, twMerge } from "tailwind-merge";

const InsightRoll = ({ insights, locale }) => {
  const t = useTranslations("Insights");
  return (
    <div
      className={twMerge(
        "w-full bg-accent dark:bg-accentDark text-light dark:text-dark",
        "whitespace-nowrap overflow-hidden",
        locale === "ar" ? "font-tajawal " : ""
      )}
    >
      <div
        className={twJoin(
          "animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize",
          "font-semibold tracking-wider text-sm sm:text-base",
          locale === "ar" ? "animate-rollAr" : ""
        )}
      >
        {insights.map((key) => (
          <div key={key} className="text-md ">
            {t(key)} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
