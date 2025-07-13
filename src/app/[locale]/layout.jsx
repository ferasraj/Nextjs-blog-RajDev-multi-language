import { twJoin } from "tailwind-merge";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import { Cairo, Tajawal } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import siteMetadata from "@/src/utils/siteMetaData";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { themeScript } from "./components/Hooks/themeScript";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"], // ✅ حدد الأوزان اللي بتستخدمها
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={twJoin(
        inter.variable,
        manrope.variable,
        locale === "ar" && cairo.variable,
        locale === "ar" && tajawal.variable
      )}
      suppressHydrationWarning
    >
      <head>
        {/* 👇 سكربت الثيم لمنع الوميض */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={twJoin(
          "bg-light dark:bg-dark overflow-y-hidden",
          locale === "ar" ? "font-cairo" : "font-mr"
        )}
      >
        <NextIntlClientProvider locale={locale}>
          <Header locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
