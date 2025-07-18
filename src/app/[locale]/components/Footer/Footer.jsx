"use client";
import { twMerge } from "tailwind-merge";
import {
  DribbbleIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

const logoClassName =
  "inline-block h-6 w-6 mr-4 hover:scale-125 transition-all ease duration-200";

const Footer = ({ locale }) => {
  const t = useTranslations("Footer");

  return (
    <footer
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={twMerge(
        "mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10",
        "flex flex-col items-center text-light dark:text-dark"
      )}
    >
      <h3
        className={twMerge(
          "mt-16 font-medium dark:font-bold text-center capitalize",
          "text-2xl sm:text-3xl lg:text-4xl px-4"
        )}
      >
        {t("newsletter.title")}
      </h3>
      <p
        className={twMerge(
          "mt-5 px-4 text-center w-full sm:w-3/5",
          "font-light dark:font-medium text-sm sm:text-base",
          locale === "ar" ? "font-tajawal" : ""
        )}
      >
        {t("newsletter.description")}
      </p>
      <ContactForm />
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.linkedin}
          className={logoClassName}
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          href={siteMetadata.twitter}
          className={twMerge(logoClassName, "fill-white dark:fill-dark")}
          aria-label="Reach out to me via X"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </a>

        {/* <a
          href={siteMetadata.dribbble}
          className={logoClassName}
          aria-label="Reach out to me via Dribbble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleIcon />
        </a> */}
        <a
          href={siteMetadata.instagram}
          className={twMerge(
            logoClassName,
            "-translate-y-1 mx-1 -translate-x-[10px]"
          )}
          aria-label="Reach out to me via Dribbble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href={siteMetadata.github}
          className={twMerge(logoClassName, "fill-white dark:fill-dark")}
          aria-label="Reach out to me via Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
      <div
        className={twMerge(
          "w-full  mt-16 md:mt-24 relative font-medium border-t border-solid",
          " border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between"
        )}
      >
        <span className={twMerge("text-center dark:font-semibold")}>
          {t("copyright")}
        </span>
        <a
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0 dark:font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          sitemap.xml
        </a>

        <div className={cn("text-center dark:font-semibold")}>
          {t("madeWith")}{" "}
          <span className="text-red-500 text-xl font-bold">&hearts;</span>{" "}
          {t("by")}{" "}
          <a
            href="https://nextjs-blog-raj-dev-gfm9.vercel.app"
            className="underline"
            target="_blank"
          >
            Raj Dev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
