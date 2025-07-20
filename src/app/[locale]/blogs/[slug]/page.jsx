import { allBlogs } from "contentlayer/generated";
import Tag from "../../components/Elements/Tag";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import BlogDetails from "../../components/Blog/BlogDetails";
import RenderMdx from "../../components/Blog/RenderMdx";
import { slug } from "github-slugger";
import siteMetadata from "@/src/utils/siteMetaData";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import TOC from "../../components/Blog/TOC";

const locales = routing.locales;
console.log(locales);
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    allBlogs.map((blog) => ({
      slug: slug(blog.title[locale]),
    }))
  );
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find(
    (blog) =>
      slug(blog.title[params.locale]) === decodeURIComponent(params.slug)
  );

  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });
  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "website",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}
export default function BlogPage({ params }) {
  const locale = params.locale;

  const blog = allBlogs.find(
    (blog) => slug(blog.title[locale]) === decodeURIComponent(params.slug) // ✅
  );

  if (!blog) {
    notFound();
  }

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: {
      "@type": "Person",
      name: blog?.author || siteMetadata.author,
      url: siteMetadata.twitter,
    },
    publisher: {
      "@type": "Organization",
      name: "Raj Dev Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://blog-rajmod-dev.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}/blogs/${blog.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div
            className={twMerge(
              "w-full z-10 flex flex-col items-center justify-center absolute",
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          >
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-6 text-sm py-2"
            />{" "}
            <h1
              className={twMerge(
                "inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl",
                "!leading-normal relative w-5/6"
              )}
            >
              {blog.title[locale]}
            </h1>
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          {blog.image?.filePath && (
            <Image
              src={blog.image.filePath.replace("../public", "")}
              placeholder="blur"
              blurDataURL={blog.image.blurhashDataUrl}
              alt={blog.title}
              width={blog.image.width}
              height={blog.image.height}
              className="aspect-square w-full h-full object-cover object-center"
              priority
              sizes="100vw"
            />
          )}
        </div>
        <BlogDetails blog={blog} slug={params.slug} />
        <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12  lg:col-span-4">
            {/* <details
              className={twMerge(
                "border border-solid border-accent/30 dark:border-light ",
                "text-dark dark:text-light rounded-lg p-4 sticky top-5 max-h-[100vh] ",
                "overflow-hidden overflow-y-auto"
              )}
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className={twMerge(
                          "data-[level=two]:pl-0",
                          "data-[level=two]:pt-2",
                          "data-[level=two]:text-lg",
                          "data-[level=two]:border-t border-solid border-accent/30 dark:border-light",
                          "data-[level=three]:pl-4",
                          "sm:data-[level=three]:pl-6",
                          "flex items-center justify-start"
                        )}
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}
                        <span
                          className={twMerge(
                            heading.level === "three"
                              ? "hover:underline"
                              : undefined
                          )}
                        >
                          {heading.text}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details> */}
            <TOC toc={blog.toc} locale={locale} />
          </div>
          <RenderMdx blog={blog} locale={locale} />
        </div>
      </article>
    </>
  );
}
