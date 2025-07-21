import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "./components/Home/HomeCoverSection";
import FeaturedPosts from "./components/Home/FeaturedPosts";
import RecentPosts from "./components/Home/RecentPosts";
import siteMetadata from "@/src/utils/siteMetaData";
import { routing } from "@/src/i18n/routing";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const locale = params.locale;

  return {
    title: {
      template: `%s | ${siteMetadata.title[locale]}`,
      default: siteMetadata.title[locale],
    },
    description: siteMetadata.description[locale],
    alternates: {
      canonical: `${siteMetadata.siteUrl}/${locale}`,
      languages: {
        en: `${siteMetadata.siteUrl}/en`,
        ar: `${siteMetadata.siteUrl}/ar`,
      },
    },
    openGraph: {
      title: siteMetadata.title[locale],
      description: siteMetadata.description[locale],
      url: siteMetadata.siteUrl,
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
      title: siteMetadata.title[locale],
      images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
      description: siteMetadata.description[locale],
      creator: siteMetadata.authorTwitter || "@ferasraj",
    },
  };
}

export default function Home({ params }) {
  const locale = useLocale();
  if (!routing.locales.includes(params.locale)) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection blogs={allBlogs} locale={params.locale} />
      <FeaturedPosts blogs={allBlogs} locale={params.locale} />
      <RecentPosts blogs={allBlogs} locale={params.locale} />
    </main>
  );
}
