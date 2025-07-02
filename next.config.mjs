/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuração otimizada para Vercel
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
