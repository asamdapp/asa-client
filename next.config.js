/** @type {import("next").NextConfig} */
const nextTranslate = require("next-translate");
const withTranslateRoutes = require("next-translate-routes/plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: false,
  },
};

module.exports = withTranslateRoutes(nextTranslate({ ...nextConfig }));
