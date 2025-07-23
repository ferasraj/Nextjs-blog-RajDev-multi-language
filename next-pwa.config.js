/** @type {import('next-pwa').NextPWAConfig} */
module.exports = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",

  // استبعاد ملفات لا تولدها Next فعليًا
  buildExcludes: [/app-build-manifest\.json$/],

  runtimeCaching: [
    // ✅ صفحات الموقع (Blogs, About, Contact...)
    {
      urlPattern: /^\/(en|ar)?(\/(blogs|categories|about|contact)\/.*)?$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "pages-cache",
        networkTimeoutSeconds: 5,
        plugins: [
          {
            handlerDidError: async () => {
              return caches.match("/offline.html");
            },
          },
        ],
      },
    },

    // ✅ صور داخل public/blogs
    {
      urlPattern: /^\/blogs\/.*\.(png|jpg|jpeg|webp|svg|gif)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "blog-images",
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },

    // ✅ صور Next.js (image optimization)
    {
      urlPattern: /^\/_next\/image\?url=.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "next-image",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },

    // ✅ خطوط Google
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },

    // ✅ ملفات static من Next.js: JS, CSS, chunks
    {
      urlPattern: /^\/_next\/static\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "next-static-assets",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 24 * 60 * 60, // 60 يوم
        },
      },
    },
  ],
};
