// scripts/generate-routes.js

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

// ✅ 1. توليد روابط المقالات باللغتين
const blogRoutes = [];

allBlogs
  .filter((blog) => blog.isPublished)
  .forEach((blog) => {
    if (blog.title?.ar) blogRoutes.push(`/blogs/ar/${slug(blog.title.ar)}`);
    if (blog.title?.en) blogRoutes.push(`/blogs/en/${slug(blog.title.en)}`);
  });

fs.writeFileSync(
  path.join(outputDir, "blogRoutes.json"),
  JSON.stringify(blogRoutes, null, 2),
  "utf-8"
);
console.log("✅ blogRoutes.json (ar + en) تم إنشاؤه بنجاح");

// ✅ 2. توليد روابط التصنيفات بالإنجليزية فقط
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

const categoryRoutes = getUniqueTags(allBlogs).map(
  (tag) => `/categories/${tag}`
);

fs.writeFileSync(
  path.join(outputDir, "categoryRoutes.json"),
  JSON.stringify(categoryRoutes, null, 2),
  "utf-8"
);
console.log("✅ categoryRoutes.json (en only) تم إنشاؤه بنجاح");
