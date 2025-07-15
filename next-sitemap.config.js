const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true, // ← هذا يولد sitemap.xml تلقائيًا
};
