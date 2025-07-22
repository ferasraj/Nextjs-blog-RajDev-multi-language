const fs = require("fs");
const path = require("path");
const xmlFormatter = require("xml-formatter");

const blogRoutes = require("../blogRoutes.json");
const categoryRoutes = require("../categoryRoutes.json");
const publicPath = path.join(__dirname, "../public");

const SITE_URL = "https://blog-rajmod-dev.vercel.app";
const now = new Date().toISOString();

function generateEntry(loc, alternate = null) {
  let entry = `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>`;

  if (alternate) {
    entry += `
    <xhtml:link rel="alternate" hreflang="${alternate.lang}" href="${SITE_URL}${alternate.href}" />`;
  }

  entry += `
  </url>`;
  return entry;
}

const entries = [];

// 📌 Blog routes
for (const route of blogRoutes) {
  if (route.en && route.ar) {
    entries.push(generateEntry(route.en, { lang: "ar", href: route.ar }));
    entries.push(generateEntry(route.ar, { lang: "en", href: route.en }));
  } else if (route.en) {
    entries.push(generateEntry(route.en));
  } else if (route.ar) {
    entries.push(generateEntry(route.ar));
  }
}

// 📌 Category routes
for (const route of categoryRoutes) {
  if (route.en && route.ar) {
    entries.push(generateEntry(route.en, { lang: "ar", href: route.ar }));
    entries.push(generateEntry(route.ar, { lang: "en", href: route.en }));
  } else if (route.en) {
    entries.push(generateEntry(route.en));
  } else if (route.ar) {
    entries.push(generateEntry(route.ar));
  }
}

const rawXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${entries.join("\n")}
</urlset>`;

// ✅ Format
const formatted = xmlFormatter(rawXml, {
  indentation: "  ",
  collapseContent: true,
  lineSeparator: "\n",
});

// 📄 Save
const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, formatted, "utf8");
console.log("✅ sitemap.xml تم توليده بنجاح!");

// 🧠 توليد robots.txt
const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`.trim();

fs.writeFileSync(path.join(publicPath, "robots.txt"), robotsTxt, "utf8");
console.log("✅ robots.txt تم توليده بنجاح");
