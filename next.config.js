/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin({});

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  experimental: {
    // appDir: true,
  },
  swcMinify: true,

  // أضف هذا الجزء الجديد
  async headers() {
    return [
      {
        source: "/:path*.xml",
        headers: [
          {
            key: "Content-Type",
            value: "text/xml; charset=utf-8",
          },
        ],
      },
    ];
  },

  // إضافة اختيارية لتحسين SEO
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap-0.xml", // إذا كنت تريد إعادة توجيه
      },
    ];
  },
};

module.exports = withContentlayer(withNextIntl({ ...nextConfig }));

// /** @type {import('next').NextConfig} */
// const { withContentlayer } = require("next-contentlayer");
// const createNextIntlPlugin = require("next-intl/plugin");

// const withNextIntl = createNextIntlPlugin({});

// const nextConfig = {
//   compiler: {
//     removeConsole: true,
//   },
//   experimental: {
//     // appDir: true,
//   },
//   swcMinify: true,
// };

// module.exports = withContentlayer(withNextIntl({ ...nextConfig }));
