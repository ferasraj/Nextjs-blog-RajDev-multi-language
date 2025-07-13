import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "./components/Home/HomeCoverSection";
import FeaturedPosts from "./components/Home/FeaturedPosts";
import RecentPosts from "./components/Home/RecentPosts";
import siteMetadata from "@/src/utils/siteMetaData";
import { routing } from "@/src/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export const metadata = {
  title: "Raj Dev Blog | Frontend Articles, Tutorials & More",
  description:
    "Explore high-quality frontend development articles, tips, and tutorials on JavaScript, React, Tailwind CSS, and more. Stay up to date with modern web technologies.",
  alternates: {
    canonical: siteMetadata.siteUrl, // e.g., https://myblog.com/
  },
  openGraph: {
    title: "Raj Dev Blog | Frontend Articles, Tutorials & More",
    description:
      "Explore high-quality frontend development articles, tips, and tutorials on JavaScript, React, Tailwind CSS, and more.",
    url: siteMetadata.siteUrl,
    siteName: "Raj Dev Blog",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteMetadata.socialBanner, // or any general cover image
        width: 1200,
        height: 630,
        alt: "Raj Dev Blog Open Graph Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Dev Blog | Frontend Articles, Tutorials & More",
    description:
      "Explore high-quality frontend development articles, tips, and tutorials on JavaScript, React, Tailwind CSS, and more.",
    images: [siteMetadata.socialBanner],
    creator: siteMetadata.authorTwitter || "@your_twitter", // optional
  },
};

export default async function Home({ params }) {
  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection blogs={allBlogs} locale={params.locale} />
      {/* <FeaturedPosts blogs={allBlogs} locale={params.locale} /> */}
      <RecentPosts blogs={allBlogs} locale={params.locale} />
    </main>
  );
}
