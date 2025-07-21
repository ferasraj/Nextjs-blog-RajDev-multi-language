import Link from "next/link";
import AboutCoverSection from "../../components/About/AboutCoverSection";
import Skills from "../../components/About/Skills";
import { routing } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";
import siteMetadata from "@/src/utils/siteMetaData";

export async function generateMetadata({ params }) {
  const locale = params.locale;

  return {
    title: {
      template: `%s | ${siteMetadata.title[locale]}`,
      default: locale === "ar" ? "عن المدونة" : "About Me",
    },
    description:
      locale === "ar"
        ? "تعرّف أكثر على المدونة، الكاتب، والرسالة وراء مدونة راج ديف."
        : "Learn more about the blog, the author, and the mission behind Raj Dev Blog.",
    alternates: {
      canonical: `${siteMetadata.siteUrl}/${locale}/about`,
      languages: {
        en: `${siteMetadata.siteUrl}/en/about`,
        ar: `${siteMetadata.siteUrl}/ar/about`,
      },
    },
    openGraph: {
      title: locale === "ar" ? "عن المدونة" : "About Me",
      description:
        locale === "ar"
          ? "تعرّف أكثر على المدونة، الكاتب، والرسالة وراء مدونة راج ديف."
          : "Learn more about the blog, the author, and the mission behind Raj Dev Blog.",
      url: `${siteMetadata.siteUrl}/${locale}/about`,
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
      title: locale === "ar" ? "عن المدونة" : "About Me",
      description:
        locale === "ar"
          ? "تعرّف أكثر على المدونة، الكاتب، والرسالة وراء مدونة راج ديف."
          : "Learn more about the blog, the author, and the mission behind Raj Dev Blog.",
      images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
      creator: siteMetadata.authorTwitter || "@ferasraj",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }) {
  generateStaticParams(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: "About",
  });

  return (
    <>
      <AboutCoverSection locale={params.locale} />
      <Skills locale={params.locale} />
      <h2
        className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 
        sm:mx-12 md:mx-16 
      lg:mx-20 text-dark dark:text-light dark:font-normal"
      >
        {t("haveProject")}{" "}
        <Link
          href={`/${params.locale}/contact`}
          className="!underline underline-offset-2"
        >
          {t("contactLink")}
        </Link>{" "}
        {t("letsMakeItHappen")}
      </h2>
    </>
  );
}
