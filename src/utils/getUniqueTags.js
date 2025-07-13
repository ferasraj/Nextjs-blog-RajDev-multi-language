import { slug } from "github-slugger";

export function getUniqueTags(blogs) {
  const tags = new Set();

  blogs.forEach((blog) => {
    if (blog.isPublished) {
      blog.tags.forEach((tag) => tags.add(slug(tag)));
    }
  });

  return ["all", ...Array.from(tags)];
}
