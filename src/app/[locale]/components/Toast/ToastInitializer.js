"use client";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import CustomToast from "./CustomToast";

export default function ToastInitializer() {
  const locale = useLocale();
  const { resolvedTheme } = useTheme();

  return <CustomToast locale={locale} isDarkMode={resolvedTheme === "dark"} />;
}
