import { allBlogs } from "@/.contentlayer/generated";
import { slug } from "github-slugger";
import Categories from "../../components/Blog/Categories";
import BlogLayoutThree from "../../components/Blog/BlogLayoutThree";
import { getUniqueTags } from "@/src/utils/getUniqueTags";
import { toCapitalizedName } from "@/src/utils/toCapitalizedName";
import siteMetadata from "@/src/utils/siteMetaData";
import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allCategories = getUniqueTags(allBlogs);
  const locales = routing.locales;

  return locales.flatMap((locale) =>
    allCategories.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const categoryName = toCapitalizedName(params.slug);
  const locale = params.locale;

  return {
    title: `Best ${categoryName} Tutorials & Articles | ${siteMetadata.title[locale]}`,
    description: `Explore insightful blogs and tutorials on ${
      params.slug === "all" ? "web development" : categoryName
    }. Stay up to date with the latest in tech.`,
    alternates: {
      canonical: `${siteMetadata.siteUrl}/${locale}/categories/${params.slug}`,
      languages: {
        en: `${siteMetadata.siteUrl}/en/categories/${params.slug}`,
        ar: `${siteMetadata.siteUrl}/ar/categories/${params.slug}`,
      },
    },
    openGraph: {
      title: `Best ${categoryName} Tutorials & Articles | Raj Dev Blog`,
      description: `Explore insightful blogs and tutorials on ${
        params.slug === "all" ? "web development" : categoryName
      }. Stay up to date with the latest in tech.`,
      url: `${siteMetadata.siteUrl}/${locale}/categories/${params.slug}`,
      siteName: "Raj Dev Blog",
      type: "website",
      images: [siteMetadata.socialBanner],
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Blogs`,
      description: `Explore insightful blogs and tutorials on ${
        params.slug === "all" ? "web development" : categoryName
      }. Stay up to date with the latest in tech.`,
      images: [siteMetadata.socialBanner],
      creator: siteMetadata.authorTwitter,
    },
  };
}
const CategoryPage = async ({ params }) => {
  const locale = params.locale;

  generateStaticParams(locale);

  const allCategories = getUniqueTags(allBlogs);

  if (
    !allCategories.some((tag) => slug(tag) === params.slug) &&
    params.slug !== "all"
  ) {
    notFound();
  }

  const blogs = allBlogs
    .filter((blog) => {
      if (params.slug === "all") return true;
      return blog.tags.some((tag) => slug(tag) === params.slug);
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const t = await getTranslations({ locale, namespace: "tags" });
  const tPage = await getTranslations({ locale, namespace: "categoryPage" });

  const translatedName = t(params.slug, {
    default: toCapitalizedName(params.slug),
  });
  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1
          className={twMerge(
            "mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl"
          )}
        >
          #{translatedName}
        </h1>
        <span
          className={twMerge(
            "mt-2 inline-block",
            params.locale === "ar" ? "font-tajawal" : ""
          )}
        >
          {tPage("discoverMore")}
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} locale={params.locale} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
