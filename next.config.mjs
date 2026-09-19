import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
