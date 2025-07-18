const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// npm run lint:mdx

// 📁 Path to your content folder
const dir = path.join(process.cwd(), "content");

// 📁 Read all subfolders inside /content
const folders = fs.readdirSync(dir).filter((file) => {
  return fs.statSync(path.join(dir, file)).isDirectory();
});

let errorFound = false;

// 🔍 Check each index.mdx file
folders.forEach((folder) => {
  const filePath = path.join(dir, folder, "index.mdx");

  if (!fs.existsSync(filePath)) {
    console.error(`❌ [Error] File not found: ${filePath}`);
    errorFound = true;
    return;
  }

  try {
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    console.log(`✅ ${folder}/index.mdx - frontmatter loaded`);

    // 🔍 Validate title (must be an object with 'en' and 'ar')
    if (
      !data.title ||
      typeof data.title !== "object" ||
      !data.title.en ||
      !data.title.ar
    ) {
      console.warn(
        `⚠️ [Warning] "${folder}" - title must be an object with 'en' and 'ar'`
      );
      errorFound = true;
    }

    // 🔍 Validate description (same structure as title)
    if (
      !data.description ||
      typeof data.description !== "object" ||
      !data.description.en ||
      !data.description.ar
    ) {
      console.warn(
        `⚠️ [Warning] "${folder}" - description must be an object with 'en' and 'ar'`
      );
      errorFound = true;
    }

    // 🔍 Validate tags (must be array if exists)
    if (!data.tags || !Array.isArray(data.tags) || data.tags.length === 0) {
      console.warn(
        `⚠️ [Warning] "${folder}" - tags is required and must be a non-empty array`
      );
      errorFound = true;
    }

    // 🔍 Validate publishedAt (if exists)
    if (data.publishedAt && isNaN(Date.parse(data.publishedAt))) {
      console.warn(`⚠️ [Warning] "${folder}" - publishedAt is invalid`);
      errorFound = true;
    }

    // 🔍 Validate updatedAt (if exists)
    if (data.updatedAt && isNaN(Date.parse(data.updatedAt))) {
      console.warn(`⚠️ [Warning] "${folder}" - updatedAt is invalid`);
      errorFound = true;
    }

    // 🔍 Validate author (must exist)
    if (!data.author || typeof data.author !== "string") {
      console.warn(
        `⚠️ [Warning] "${folder}" - author is missing or not a string`
      );
      errorFound = true;
    }
  } catch (e) {
    console.error(`❌ [Error] in file "${folder}": ${e.message}`);
    errorFound = true;
  }
});

if (!errorFound) {
  console.log("\n🎉 All files are valid. No errors found!");
} else {
  console.log("\n❗ Some files have errors. Please fix them.");
}
