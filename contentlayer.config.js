import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "json",
      required: true,
      // description: "Translated titles, e.g. { en: '...', ar: '...' }",
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "json",
      required: true,
      // description: "Translated descriptions, e.g. { en: '...', ar: '...' }",
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
    },
  },
  computedFields: {
    publishedAt: {
      type: "date",
      required: true,
      resolve: (doc) => new Date().toISOString(),
    },
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regulerExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulerExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
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

//  computedFields: {
//     publishedAt: {
//       type: "date",
//       resolve: (doc) => {
//         const fullPath = path.join(process.cwd(), "content", doc._raw.sourceFilePath);
//         const stats = fs.statSync(fullPath);
//         return stats.birthtime.toISOString(); // تاريخ الإنشاء
//       },
//     },
//     updatedAt: {
//       type: "date",
//       resolve: (doc) => {
//         const fullPath = path.join(process.cwd(), "content", doc._raw.sourceFilePath);
//         const stats = fs.statSync(fullPath);
//         return stats.mtime.toISOString(); // تاريخ آخر تعديل
//       },
//     },
//   },
