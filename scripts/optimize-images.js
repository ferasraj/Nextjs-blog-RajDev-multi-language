const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "..", "public", "blogs");
const outputDir = path.join(__dirname, "..", "public", "blogs-optimized");

const supportedFormats = [".jpg", ".jpeg", ".png"];

// يتأكد أن مجلد الهدف موجود
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// يضغط ويحفظ الصورة في نفس البنية داخل blogs-optimized
async function compressImage(inputPath, relativePath) {
  const ext = path.extname(inputPath).toLowerCase();
  const outputPath = path.join(outputDir, relativePath);

  ensureDirectoryExists(path.dirname(outputPath));

  try {
    await sharp(inputPath)
      .resize({ width: 1600 }) // تقدر تغير العرض حسب الحاجة
      .toFormat(ext === ".png" ? "png" : "jpeg", {
        quality: 75,
        mozjpeg: true,
      })
      .toFile(outputPath);

    console.log(`✅ Compressed: ${outputPath}`);
  } catch (err) {
    console.error(`❌ Error compressing ${inputPath}:`, err);
  }
}

// يمشي على كل الصور داخل blogs
function walkAndCompress(dir, base = "") {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(base, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walkAndCompress(fullPath, relativePath);
    } else if (
      supportedFormats.includes(path.extname(fullPath).toLowerCase())
    ) {
      compressImage(fullPath, relativePath);
    }
  });
}

walkAndCompress(inputDir);
