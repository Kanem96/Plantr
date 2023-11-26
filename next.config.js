/** @type {import('next').NextConfig} */
const { parsed: localEnv } = require("dotenv").config();
const nextConfig = {
  env: localEnv,
  images: {
    domains: ["perenual.com"],
  },
};

module.exports = nextConfig;
