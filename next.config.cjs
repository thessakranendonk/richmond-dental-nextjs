const { i18n } = require("./next-i18next.config");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  i18n,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    };
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withMDX(nextConfig);
