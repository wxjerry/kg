/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
// next.config.mjs
export default {
  experimental: {
    serverComponents: {
      external: ['node-fetch', 'axios'], // 兼容特定模块
    },
    serverActions: true,
    nodejs_compat: true,
    runtime: 'edge',
  },
  images: {
    domains: ['picsum.photos'], // 允许的图片域名
  },
};
export default nextConfig
