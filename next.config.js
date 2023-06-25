/** @type {import("next").NextConfig} */
const nextTranslate = require("next-translate");
const withTranslateRoutes = require("next-translate-routes/plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: false,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = withTranslateRoutes(nextTranslate({ ...nextConfig }));
