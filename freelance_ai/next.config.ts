/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // Other configurations
  eslint:{
    ignoreDuringBuilds:true
  },
  typescript:{
    ignoreBuildErrors:true
  }
}

export default nextConfig
