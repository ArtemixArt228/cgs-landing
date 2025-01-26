/** @type {import('next').NextConfig} */
// Run ANALYZE=true npm run build to create html report page
// const withBundleAnalyzer = require("next-bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "cgs-landing-storage.s3.eu-central-1.amazonaws.com",
      "landing-cgs.s3.amazonaws.com",
      "api-chat-engine-io.s3.amazonaws.com",
      "d2qrnmx3qcgrup.cloudfront.net",
    ],
    minimumCacheTTL: 3600,
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
