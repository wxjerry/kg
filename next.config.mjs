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
      external: ['node-fetch'], // 添加需要兼容的Node.js模块
    },
    serverActions: true, // 如果使用了Server Actions
    nodejs_compat: true, // 启用Node.js兼容性层
  },
  runtime: 'edge', // 全局启用Edge Runtime
};
export default nextConfig
