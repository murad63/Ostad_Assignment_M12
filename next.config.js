/** @type {import('next').NextConfig} */
/* const nextConfig = {
  basePath: '/newProject'
} */
const nextConfig = {
    distDir: 'build',
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            }
          ]
        }
      ]
    }
  }
  
  module.exports = nextConfig