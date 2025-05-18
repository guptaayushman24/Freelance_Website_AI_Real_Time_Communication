/** @type {import('next').NextConfig} */
import {PrismaPlugin} from '@prisma/nextjs-monorepo-workaround-plugin'
const nextConfig: import('next').NextConfig = {
  // Other configurations
  eslint:{
    ignoreDuringBuilds:true
  },
  typescript:{
    ignoreBuildErrors:true
  },
   webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }
    return config
  },
}

export default nextConfig
