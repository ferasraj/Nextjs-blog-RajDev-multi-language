"use client";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import Link from "next/link";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
  SunIcon,
  MoonIcon,
  InstagramIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
// import useThemeSwitch from "../Hooks/useThemeSwitch";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import DropdownMenuLan from "../Elements/DropdownMenuLan";

const logoClassName =
  "inline-block h-6 w-6 mr-4 hover:scale-125 transition-all ease duration-200";
const Header = ({ locale }) => {
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false);
  const [mounted, setMounted] = useState(false);

  // refs
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // translations
  const t = useTranslations("Header");

  // prevent hydration mismatch by delaying render until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // handle outside clicks to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setClick(false);
      }
    };

    if (click) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [click]);

  const toggle = () => {
    setClick(!click);
  };

  // if not mounted yet, don't render (fix hydration errors)
  // if (!mounted) return null;

  return (
    <header
      className="w-full p-4  px-5 sm:px-10 flex items-center justify-between
     "
    >
      <Logo locale={locale} />

      {/*      {click && <MobileMenu toggle={toggle} />} */}
      <button
        className="inline-block sm:hidden z-50"
        ref={buttonRef}
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark 
              dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark 
              dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark 
              dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      {/* {click && <MobileMenu navbar } */}

      <nav
        ref={navRef}
        className=" flex-col w-max py-3 px-6 sm:px-8 border border-solid 
        border-dark dark:border-light rounded-2xl font-medium capitalize items-center flex sm:hidden
        fixed top-5 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-0 z-50
        transition-all ease duration-300 dark:text-black/80  dark:font-semibold
        justify-center "
        style={{
          top: click ? "1rem" : "-15rem",
        }}
      >
        <Link
          href={`/${locale}/`}
          className="mb-2"
          onClick={() => setClick(false)}
        >
          {t("Home")}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="mb-2"
          onClick={() => setClick(false)}
        >
          {t("About")}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="mb-2"
          onClick={() => setClick(false)}
        >
          {t("Contact")}
        </Link>
        {!mounted ? (
          <button className="w-6 h-6 rounded-full dark:bg-black" />
        ) : (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={twMerge(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              theme === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {theme === "light" ? (
              <MoonIcon className="fill-dark" />
            ) : (
              <SunIcon className="fill-dark" />
            )}
          </button>
        )}
        <DropdownMenuLan />
      </nav>

      <nav
        className={twMerge(
          " w-max py-3 px-8 border border-solid  border-dark ",
          "rounded-full font-medium capitalize items-center hidden sm:flex",
          "fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50",
          " transition-all ease duration-300 dark:text-black/80  dark:font-semibold"
        )}
      >
        <Link
          href={`/${locale}/`}
          className="mx-2 hover:scale-105 transition-all ease duration-300 "
        >
          {t("Home")}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="mx-2 hover:scale-105 transition-all ease duration-300"
        >
          {t("About")}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="mx-2 hover:scale-105 transition-all ease duration-300"
        >
          {t("Contact")}
        </Link>
        {!mounted ? (
          <button
            className={twMerge(
              "w-6 h-6 rounded-full ml-2 dark:bg-white bg-black ",
              locale === "ar" ? "mr-3" : ""
            )}
          />
        ) : (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={twMerge(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              theme === "light" ? "bg-dark text-light" : "bg-light text-dark",
              locale === "ar" ? "mr-3" : ""
            )}
            aria-label="theme-switcher"
          >
            {theme === "light" ? (
              <MoonIcon className="fill-dark" />
            ) : (
              <SunIcon className="fill-dark" />
            )}
          </button>
        )}
      </nav>
      <div className="hidden sm:flex items-center">
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
          className={twMerge(logoClassName, "dark:fill-white")}
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
          className={twMerge(
            logoClassName,
            "dark:fill-white ",
            locale === "ar" ? "ml-0 mr-4" : "mx-2"
          )}
          aria-label="Reach out to me via GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />{" "}
        </a>
        <DropdownMenuLan locale={locale} />
      </div>
    </header>
  );
};

export default Header;
