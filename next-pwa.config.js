/** @type {import('next-pwa').NextPWAConfig} */
// const runtimeCaching = [
//   {
//     urlPattern: /^\/$/,
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "root",
//       networkTimeoutSeconds: 5,
//     },
//   },
//   {
//     urlPattern: /^\/(en|ar)\/?$/,
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "locale-home-pages",
//       networkTimeoutSeconds: 5,
//     },
//   },
//   {
//     urlPattern: /^\/(en|ar)(\/.*)?$/,
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "all-locale-pages",
//       networkTimeoutSeconds: 5,
//     },
//   },
//   {
//     urlPattern: /^\/(en|ar)\/blogs\/.*$/,
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "blog-pages",
//       networkTimeoutSeconds: 5,
//     },
//   },
//   {
//     urlPattern: /^\/(en|ar)\/categories\/.*$/,
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "category-pages",
//       networkTimeoutSeconds: 5,
//     },
//   },
//   {
//     urlPattern: /^\/(en|ar)\/(about|contact|privacy|terms|sitemap)\/?$/,
//     handler: "NetworkFirst",
//     options: {
//       cacheName: "static-pages",
//       networkTimeoutSeconds: 5,
//     },
//   },
//   {
//     urlPattern: /^\/blogs\/.*\.(png|jpg|jpeg|webp|svg|gif)$/i,
//     handler: "CacheFirst",
//     options: {
//       cacheName: "blog-images",
//       expiration: {
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60,
//       },
//     },
//   },
//   {
//     urlPattern: /^\/_next\/image\?url=.*/i,
//     handler: "CacheFirst",
//     options: {
//       cacheName: "next-image",
//       expiration: {
//         maxEntries: 100,
//         maxAgeSeconds: 30 * 24 * 60 * 60,
//       },
//     },
//   },
//   {
//     urlPattern: /\.(png|jpg|jpeg|webp|svg|gif)$/,
//     handler: "CacheFirst",
//     options: {
//       cacheName: "static-images",
//       expiration: {
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60,
//       },
//     },
//   },
//   {
//     urlPattern: /^\/fonts\/.*\.(woff2?|ttf|otf)$/i,
//     handler: "CacheFirst",
//     options: {
//       cacheName: "local-fonts",
//       expiration: {
//         maxEntries: 20,
//         maxAgeSeconds: 365 * 24 * 60 * 60,
//       },
//     },
//   },
//   {
//     urlPattern: /^\/_next\/static\/.*/i,
//     handler: "CacheFirst",
//     options: {
//       cacheName: "next-static-assets",
//       expiration: {
//         maxEntries: 100,
//         maxAgeSeconds: 60 * 24 * 60 * 60,
//       },
//     },
//   },
// ];

module.exports = {
  dest: "public",
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/app-build-manifest\.json$/],
  fallbacks: {
    document: "/offline.html",
    image: "/offline.html",
  },
};
