/** @type {import('next').NextConfig} */

// import { withContentlayer } from "next-contentlayer";
// import createNextIntlPlugin from "next-intl/plugin";

const { withContentlayer } = require("next-contentlayer");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin({});

const withPWA = require("next-pwa")(require("./next-pwa.config.js"));

const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};
console.log("✅ WITH PWA APPLIED");
module.exports = withPWA(
  withContentlayer(
    withNextIntl({
      ...nextConfig,
    })
  )
);
