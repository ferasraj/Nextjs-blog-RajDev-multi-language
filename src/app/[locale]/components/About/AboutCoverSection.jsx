"use client";

import Image from "next/image";
import profileCharacter from "@/public/character.png";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

const AboutCoverSection = ({ locale }) => {
  const t = useTranslations("About");

  return (
    <section
      className={twMerge(
        "w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light",
        "flex flex-col md:flex-row items-center justify-center text-dark dark:text-light"
      )}
    >
      <div
        className={twMerge(
          "w-full md:w-1/2 h-full ",
          " border-solid border-dark dark:border-light flex justify-center ",
          locale === "ar" ? "border-l-2" : "border-r-2"
        )}
      >
        <Image
          src={profileCharacter}
          alt="Raj Dev"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div
        className={twMerge(
          "w-full md:w-1/2 flex flex-col text-left items-start",
          "justify-center px-5 xs:p-10 pb-10 lg:px-16",
          locale === "ar" ? "text-right" : ""
        )}
      >
        <h2
          className={twMerge(
            "font-bold capitalize text-4xl xs:text-5xl xl:text-6xl",
            "text-center lg:text-left leading-[10rem]",
            locale === "ar"
              ? "lg:text-right leading-[4rem] xl:text-[55px]"
              : "leading-tight"
          )}
        >
          {t("mantraTitle")}
        </h2>
        <p
          className={twMerge(
            "font-medium capitalize mt-4 text-base",
            locale === "ar" ? "font-tajawal font-semibold" : ""
          )}
        >
          {t("mantraDescription")}{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
