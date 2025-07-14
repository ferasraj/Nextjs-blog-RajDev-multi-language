import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,
  // أضف هذه الإعدادات الإضافية
  // alternateLinks: true,
  // localeDetection: true,
  localePrefix: "always",
});

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
