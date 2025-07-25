import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
// import LottieAnimation from "../../components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";
import { routing } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";
import { twJoin } from "tailwind-merge";
import dynamic from "next/dynamic";

// ✅ Lazy load مع إلغاء SSR وتحميل مؤقت
const LottieAnimation = dynamic(
  () => import("../../components/Contact/LottieAnimation"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[250px] w-full flex items-center justify-center ">
        <span className="text-sm text-accent animate-pulse">Loading...</span>
      </div>
    ),
  }
);

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata({ params }) {
  const locale = params.locale;

  return {
    title: {
      template: `%s | ${siteMetadata.title[locale]}`,
      default: locale === "ar" ? "اتصل بي" : "Contact Me",
    },
    description:
      locale === "ar"
        ? `تواصل معي من خلال النموذج في هذه الصفحة أو عبر البريد الإلكتروني ${siteMetadata.email}`
        : `Contact me through the form on this page or via email at ${siteMetadata.email}`,
    alternates: {
      canonical: `${siteMetadata.siteUrl}/${locale}/contact`,
      languages: {
        en: `${siteMetadata.siteUrl}/en/contact`,
        ar: `${siteMetadata.siteUrl}/ar/contact`,
      },
    },
    openGraph: {
      title: locale === "ar" ? "اتصل بي" : "Contact Me",
      description:
        locale === "ar"
          ? `تواصل معي من خلال النموذج في هذه الصفحة أو عبر البريد الإلكتروني ${siteMetadata.email}`
          : `Contact me through the form on this page or via email at ${siteMetadata.email}`,
      url: `${siteMetadata.siteUrl}/${locale}/contact`,
      siteName: siteMetadata.title[locale],
      locale,
      type: "website",
      images: [
        {
          url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: locale === "ar" ? "اتصل بي" : "Contact Me",
      description:
        locale === "ar"
          ? `تواصل معي من خلال النموذج في هذه الصفحة أو عبر البريد الإلكتروني ${siteMetadata.email}`
          : `Contact me through the form on this page or via email at ${siteMetadata.email}`,
      images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
      creator: siteMetadata.authorTwitter || "@ferasraj",
    },
  };
}

const Contact = async ({ params }) => {
  const locale = params.locale;

  const t = await getTranslations({
    locale: params.locale,
    namespace: "Contact",
  });
  return (
    <section
      className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark 
    dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark 
    dark:text-light"
    >
      <div
        className={twJoin(
          "inline-block w-full sm:w-4/5 md:w-2/5 h-full ",
          "border-solid border-dark dark:border-light",
          "flex items-center justify-center",
          locale === "ar" ? "md:border-l-2" : "md:border-r-2"
        )}
      >
        <LottieAnimation />
      </div>
      <div
        className="w-full  md:w-3/5 flex flex-col items-start justify-center 
      px-5 xs:px-10 md:px-16 pb-8"
      >
        <h2
          aria-label={t("title")}
          className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl"
        >
          {t("title")}
        </h2>
        <ContactForm locale={params.locale} />
      </div>
    </section>
  );
};

export default Contact;
