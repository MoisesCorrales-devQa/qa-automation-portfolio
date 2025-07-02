/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/qa-automation-portfolio' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
