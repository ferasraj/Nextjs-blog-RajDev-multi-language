// const siteMetadata = require('./src/utils/siteMetaData');
// const blogRoutes = require('./blogRoutes.json');
// const categoryRoutes = require('./categoryRoutes.json');

// const SITE_URL = process.env.SITE_URL || siteMetadata.siteUrl;

// module.exports = {
//   siteUrl: SITE_URL,
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
//   changefreq: 'daily',
//   priority: 0.7,
//   exclude: [
//     '/server-sitemap.xml',
//     '/manifest.webmanifest',
//     '/google*.html',
//     '*.png',
//     '*.jpg',
//     '*.jpeg',
//     '*.gif',
//     '*.svg',
//     '*.ico',
//     '*.webp'
//   ],
//   additionalPaths: async (config) => {
//     const result = [];

//     // Add main language pages
//     result.push({
//       loc: '/',
//       changefreq: config.changefreq,
//       priority: config.priority,
//       lastmod: new Date().toISOString(),
//       alternateRefs: [
//         {
//           href: `${SITE_URL}/ar`,
//           hreflang: 'ar',
//         },
//         {
//           href: `${SITE_URL}/en`,
//           hreflang: 'en',
//         },
//       ],
//     });

//     result.push({
//       loc: '/ar',
//       changefreq: config.changefreq,
//       priority: config.priority,
//       lastmod: new Date().toISOString(),
//       alternateRefs: [
//         {
//           href: `${SITE_URL}/en`,
//           hreflang: 'en',
//         },
//       ],
//     });

//     result.push({
//       loc: '/en',
//       changefreq: config.changefreq,
//       priority: config.priority,
//       lastmod: new Date().toISOString(),
//       alternateRefs: [
//         {
//           href: `${SITE_URL}/ar`,
//           hreflang: 'ar',
//         },
//       ],
//     });

//     // Add all blog paths with correct alternateRefs (without duplicating paths)
//     blogRoutes.forEach(route => {
//       // Arabic blog post
//       result.push({
//         loc: route.ar,
//         changefreq: config.changefreq,
//         priority: config.priority,
//         lastmod: new Date().toISOString(),
//         alternateRefs: [
//           {
//             href: `${SITE_URL}${route.en}`, // Only the English path, no duplication
//             hreflang: 'en',
//           },
//         ],
//       });

//       // English blog post
//       result.push({
//         loc: route.en,
//         changefreq: config.changefreq,
//         priority: config.priority,
//         lastmod: new Date().toISOString(),
//         alternateRefs: [
//           {
//             href: `${SITE_URL}${route.ar}`, // Only the Arabic path, no duplication
//             hreflang: 'ar',
//           },
//         ],
//       });
//     });

//     // Add all category paths with correct alternateRefs (without duplicating paths)
//     categoryRoutes.forEach(route => {
//       // Arabic category
//       result.push({
//         loc: route.ar,
//         changefreq: config.changefreq,
//         priority: config.priority,
//         lastmod: new Date().toISOString(),
//         alternateRefs: [
//           {
//             href: `${SITE_URL}${route.en}`, // Only the English path, no duplication
//             hreflang: 'en',
//           },
//         ],
//       });

//       // English category
//       result.push({
//         loc: route.en,
//         changefreq: config.changefreq,
//         priority: config.priority,
//         lastmod: new Date().toISOString(),
//         alternateRefs: [
//           {
//             href: `${SITE_URL}${route.ar}`, // Only the Arabic path, no duplication
//             hreflang: 'ar',
//           },
//         ],
//       });
//     });

//     return result;
//   },
// };
