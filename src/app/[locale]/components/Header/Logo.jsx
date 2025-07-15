"use client";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

const Logo = ({ locale }) => {
  const t = useTranslations("Logo");
  return (
    <Link
      href={`/${locale}/`}
      className="flex items-center  text-dark dark:text-light"
    >
      <div
        className={twMerge(
          "w-12 md:w-16 rounded-full overflow-hidden border border-solid",
          locale === "ar" ? "ml-2 md:ml-4" : "mr-2 md:mr-4",
          "border-dark"
        )}
      >
        <Image
          src={profileImg}
          alt="RajDev logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-emibold text-lg md:text-2xl">
        {t("title")}{" "}
      </span>
    </Link>
  );
};

export default Logo;
