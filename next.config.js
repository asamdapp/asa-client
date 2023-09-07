/** @type {import("next").NextConfig} */
const nextTranslate = require('next-translate');
const withTranslateRoutes = require('next-translate-routes/plugin');

/*const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});*/

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: false,
  },
  images: {
    domains: ['cdn.sanity.io', 'asa.md'],
  },
};

module.exports = withTranslateRoutes(nextTranslate({ ...nextConfig }));
