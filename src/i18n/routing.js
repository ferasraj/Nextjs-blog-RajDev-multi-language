import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
  // localePrefix: "always", // أو 'always' إذا كنت تريد ظهور اللغة دائمًا في الرابط
});
