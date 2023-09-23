/** @type {import("next").NextConfig} */
const nextTranslate = require('next-translate');

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

module.exports = nextTranslate({ ...nextConfig });
