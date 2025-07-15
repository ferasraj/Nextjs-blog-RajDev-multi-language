"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/Dropdown-Menu";
import { usePathname, useRouter } from "next/navigation";
import World from "../Icons";
import { twMerge } from "tailwind-merge";

export default function DropdownMenuLan({ locale }) {
  const pathname = usePathname();
  const router = useRouter();

  // const changeLocale = (locale) => {
  //   const segments = pathname.split("/");

  //   // تأكد أن أول جزء هو رمز اللغة
  //   if (segments[1] === "en" || segments[1] === "ar") {
  //     segments[1] = locale;
  //   } else {
  //     // لو ما كان فيه لغة بالمسار، أضفها
  //     segments.unshift(locale);
  //   }

  //   const newPath = segments.join("/");
  //   router.push(newPath);
  // };

  const changeLocale = (locale) => {
    const currentPath = pathname.replace(/^\/(en|ar)/, `/${locale}`);
    router.push(currentPath);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={twMerge(
          " py-1 hover:scale-125 transition-all ease duration-200",
          locale === "ar" ? "px-5" : "px-2"
        )}
        aria-label="Change Language"
      >
        <World
          className="mb-2 flex flex-col items-center justify-center translate-y-[6px] 
        fill-black sm:dark:fill-light "
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-white text-accent hover:text-black 
        dark:text-black dark:hover:text-light rounded-md shadow-lg p-0 
        min-w-[50px] font-semibold "
      >
        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className="px-4 py-2 rounded-md hover:bg-accent dark:hover:bg-accentDark 
           hover:text-black dark:text-black dark:hover:text-light cursor-pointer"
        >
          EN
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => changeLocale("ar")}
          className="px-4 py-2 rounded-md hover:bg-accent dark:hover:bg-accentDark 
          hover:text-black dark:text-black dark:hover:text-light cursor-pointer"
        >
          AR
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
