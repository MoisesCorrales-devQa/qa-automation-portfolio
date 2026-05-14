/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/Fitstats/delete-data",
        destination: "/FitStats/delete-data",
      },
    ];
  },
};

module.exports = nextConfig;
