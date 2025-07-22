const fs = require("fs");
const path = require("path");
const { slug } = require("github-slugger");

// 🔹 مسار ملف Contentlayer
const GENERATED_PATH = path.join(__dirname, "../.contentlayer/generated/Blog");
const INDEX_PATH = path.join(GENERATED_PATH, "_index.json");

// 🔹 تأكد من وجود الملف
if (!fs.existsSync(INDEX_PATH)) {
  console.error("❌ لم يتم العثور على ملف _index.json");
  process.exit(1);
}

const allBlogs = require(INDEX_PATH);

// 🔹 تحضير المجلد النهائي
const outputDir = path.resolve("./");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// ✅ 1. توليد روابط المقالات ككائنات { ar: ..., en: ... }
const blogRoutes = [];

allBlogs
  .filter((blog) => blog.isPublished)
  .forEach((blog) => {
    const route = {};
    if (blog.title?.ar) route.ar = `/ar/blogs/${slug(blog.title.ar)}`;
    if (blog.title?.en) route.en = `/en/blogs/${slug(blog.title.en)}`;
    if (Object.keys(route).length > 0) blogRoutes.push(route);
  });

fs.writeFileSync(
  path.join(outputDir, "blogRoutes.json"),
  JSON.stringify(blogRoutes, null, 2),
  "utf-8"
);
console.log("✅ blogRoutes.json (كائنات ar + en) تم إنشاؤه بنجاح");

// ✅ 2. توليد روابط التصنيفات ككائنات { ar: ..., en: ... }
function getUniqueTags(blogs) {
  const tags = new Set();

  blogs.forEach((blog) => {
    if (blog.isPublished && Array.isArray(blog.tags)) {
      blog.tags.forEach((tag) => {
        // دعم للأنواع: string أو { en, ar }
        if (typeof tag === "object" && tag.en) {
          tags.add(slug(tag.en));
        } else if (typeof tag === "string") {
          tags.add(slug(tag));
        }
      });
    }
  });

  return Array.from(tags);
}

const categoryRoutes = getUniqueTags(allBlogs).map((tag) => ({
  ar: `/ar/categories/${tag}`,
  en: `/en/categories/${tag}`,
}));

fs.writeFileSync(
  path.join(outputDir, "categoryRoutes.json"),
  JSON.stringify(categoryRoutes, null, 2),
  "utf-8"
);
console.log("✅ categoryRoutes.json (كائنات ar + en) تم إنشاؤه بنجاح");
