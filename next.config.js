/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["collectiq-evox-images-qa.s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
