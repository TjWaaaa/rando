import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Für Dev-Modus: Kein Export, keine BasePath
  // Für Build: Export mit BasePath
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/rando',
    assetPrefix: '/rando/',
  }),
  images: {
    unoptimized: true,
  },
}

export default nextConfig
