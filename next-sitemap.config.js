/** @type {import('next-sitemap').IConfig} */
const blogRoutes = require("./blogRoutes.json");
const categoryRoutes = require("./categoryRoutes.json");
const siteMetadata = require("./src/utils/siteMetaData");

const SITE_URL = process.env.SITE_URL || siteMetadata.siteUrl;

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,

  alternateRefs: [
    { href: `${SITE_URL}/en`, hreflang: "en" },
    { href: `${SITE_URL}/ar`, hreflang: "ar" },
  ],

  transform: async (config, path) => {
    const parts = path.split("/").filter(Boolean);
    const locales = ["en", "ar"];
    const hasLocale = parts.length > 0 && locales.includes(parts[0]);

    const loc = path;
    const changefreq = config.changefreq;
    const priority = config.priority;
    const lastmod = config.autoLastmod ? new Date().toISOString() : undefined;

    if (hasLocale) {
      const locale = parts[0];
      const restPath = parts.slice(1).join("/");
      const fixedAlternates = config.alternateRefs.map((alt) => ({
        ...alt,
        href: `${alt.href}/${restPath}`,
        hrefIsAbsolute: true,
      }));
      return {
        loc,
        changefreq,
        priority,
        lastmod,
        alternateRefs: fixedAlternates,
      };
    }

    return {
      loc,
      changefreq,
      priority,
      lastmod,
      alternateRefs: config.alternateRefs,
    };
  },

  additionalPaths: async (config) => {
    const paths = [];

    // 🔹 المقالات
    for (const route of blogRoutes) {
      const segments = route.split("/").filter(Boolean);
      if (segments[0] === "blogs" && segments[1] && segments[2]) {
        const locale = segments[1];
        const slug = segments.slice(2).join("/");
        const correctPath = `/${locale}/blogs/${slug}`;
        const transformed = await config.transform(config, correctPath);
        paths.push(transformed);
      }
    }

    // 🔹 التصنيفات
    for (const route of categoryRoutes) {
      for (const locale of ["en", "ar"]) {
        const localePath = `/${locale}${
          route.startsWith("/") ? route : `/${route}`
        }`;
        const transformed = await config.transform(config, localePath);
        paths.push(transformed);
      }
    }

    return paths;
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    transformRobotsTxt: async (_, robotsTxt) => {
      const hostLine = `# Host\nHost: ${SITE_URL}\n\n`;
      return robotsTxt.replace(hostLine, "");
    },
  },
};
