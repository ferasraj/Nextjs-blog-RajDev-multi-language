import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";
import fs from "fs";
import path from "path";
import { slug } from "github-slugger";

// 🛡️ دالة تغليف آمنة لأي resolve
const safe = (resolver, fallback) => {
  return (doc) => {
    try {
      return resolver(doc);
    } catch (e) {
      console.error(`❌ Error in computedField:`, e.message);
      return fallback;
    }
  };
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/index.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "json",
      required: true,
    },
    description: {
      type: "json",
      required: true,
    },
    image: { type: "image" },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    publishedAt: { type: "date", required: false },
    updatedAt: { type: "date", required: false },
  },
  computedFields: {
    publishedAt: {
      type: "date",
      required: true,
      resolve: safe((doc) => {
        if (doc.publishedAt) return doc.publishedAt;

        const filePath = path.join(
          process.cwd(),
          "content",
          doc._raw.sourceFileDir,
          "index.mdx"
        );
        const stats = fs.statSync(filePath);
        return stats.birthtime.toISOString();
      }, new Date().toISOString()),
    },

    updatedAt: {
      type: "date",
      required: true,
      resolve: safe((doc) => {
        if (doc.updatedAt) return doc.updatedAt;

        const filePath = path.join(
          process.cwd(),
          "content",
          doc._raw.sourceFileDir,
          "index.mdx"
        );
        const stats = fs.statSync(filePath);
        return stats.mtime.toISOString();
      }, new Date().toISOString()),
    },

    url: {
      type: "string",
      resolve: safe((doc) => {
        const raw = doc._raw.flattenedPath;
        return `/blogs/${raw.replace(/\\/g, "/")}`;
      }, "/blogs/invalid-url"),
    },
    readingTime: {
      type: "json",
      resolve: safe(
        (doc) => {
          const result = readingTime(doc.body.raw);
          return {
            ...result,
            // نشيل النص الكامل، نخلي الترجمة على الواجهة
            minutesRounded: Math.ceil(result.minutes),
          };
        },
        { minutesRounded: 0, minutes: 0, time: 0, words: 0 }
      ),
    },

    toc: {
      type: "json",
      resolve: safe((doc) => {
        const regulerExp = /^(#{1,6})\s+(.*)/gm;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulerExp)).map(
          ([_, flag, content]) => ({
            level:
              flag.length === 1 ? "one" : flag.length === 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          })
        );
        return headings;
      }, []),
    },
  },
}));

const codeOptions = {
  theme: "github-dark",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});

// resolve: async (doc) => {
//   const regulerExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
//   const slugger = new GithubSlugger();
//   const headings = Array.from(doc.body.raw.matchAll(regulerExp)).map(
//     ({ groups }) => {
//       const flag = groups?.flag;
//       const content = groups?.content;
//       return {
//         level:
//           flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
//         text: content,
//         slug: content ? slugger.slug(content) : undefined,
//       };
//     }
//   );
//   return headings;
// },
