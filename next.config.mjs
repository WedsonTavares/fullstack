/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable Next's built-in lint during build to avoid runtime patching warnings in some environments.
  // We run lint in CI via GitHub Actions instead.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuração otimizada para Vercel
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
