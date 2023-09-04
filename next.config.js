/** @type {import("next").NextConfig} */
const nextTranslate = require('next-translate');
const withTranslateRoutes = require('next-translate-routes/plugin');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'asa.md'],
  },
};

module.exports = withTranslateRoutes(nextTranslate({ ...nextConfig }));
