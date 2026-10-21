/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera um site estático na pasta "out", publicado pelo GitHub Pages.
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
