"use client";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { DribbbleIcon, GithubIcon, LinkedinIcon, XIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const logoClassName =
  "inline-block h-6 w-6 mr-4 hover:scale-125 transition-all ease duration-200";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer
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
        Interesting Stories | Updates | Guides
      </h3>
      <p
        className={twMerge(
          "mt-5 px-4 text-center w-full sm:w-3/5",
          "font-light dark:font-medium text-sm sm:text-base"
        )}
      >
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={twMerge(
          "mt-6 w-fit sm:min-w-[384px] flex items-stretch",
          "bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
        )}
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className={twMerge(
            "w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark",
            "focus:ring-0 border-0 border-b mr-2 pb-1 "
          )}
        />

        <input
          type="submit"
          className={twMerge(
            "bg-dark text-light dark:text-dark dark:bg-light cursor-pointer",
            "font-medium rounded px-3 sm:px-5 py-1"
          )}
        />
      </form>
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

        <a
          href={siteMetadata.dribbble}
          className={logoClassName}
          aria-label="Reach out to me via Dribbble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleIcon />
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
        <span className="text-center dark:font-semibold">
          &copy;2025 RajDev. All rights reserved.
        </span>
        <a
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0 dark:font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          sitemap.xml
        </a>

        <div className="text-center dark:font-semibold">
          Made with{" "}
          <span className="text-red-500 text-xl font-bold">&hearts;</span> by{" "}
          <a
            href="https://nextjs-blog-raj-dev-gfm9.vercel.app"
            className="underline"
            target="_blank"
          >
            Raj Dev.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
