import { twJoin } from "tailwind-merge";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import siteMetadata from "@/src/utils/siteMetaData";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { themeScript } from "./components/Hooks/themeScript";
import ClientProviders from "./components/Toast/ClientProviders";

export async function generateMetadata({ params }) {
  const locale = params.locale;

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
      template: `%s | ${siteMetadata.title[locale]}`,
      default: siteMetadata.title[locale],
    },
    description: siteMetadata.description[locale],
    openGraph: {
      title: siteMetadata.title[locale],
      description: siteMetadata.description[locale],
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title[locale],
      images: [
        {
          url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title[locale],
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title[locale],
      images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
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
    alternates: {
      canonical: `${siteMetadata.siteUrl}/${locale}`,
      languages: {
        en: `${siteMetadata.siteUrl}/en`,
        ar: `${siteMetadata.siteUrl}/ar`,
      },
    },
  };
}

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
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={twJoin(
          "bg-light dark:bg-dark overflow-y-hidden",
          locale === "ar" ? "font-cairo" : "font-mr"
        )}
      >
        <NextIntlClientProvider locale={locale}>
          <ClientProviders>
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
