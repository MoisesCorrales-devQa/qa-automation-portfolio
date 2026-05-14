/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/Fitstats",
        destination: "/FitStats",
      },
      {
        source: "/Fitstats/privacy",
        destination: "/FitStats/privacy",
      },
      {
        source: "/Fitstats/delete-data",
        destination: "/FitStats/delete-data",
      },
    ];
  },
};

module.exports = nextConfig;
