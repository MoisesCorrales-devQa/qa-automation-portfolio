const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: { unoptimized: true },
  basePath: isProd ? '/qa-automation-portfolio' : '',
  assetPrefix: isProd ? '/qa-automation-portfolio/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;