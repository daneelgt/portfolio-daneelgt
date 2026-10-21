/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera um site estático na pasta "out", que pode ser hospedado em qualquer lugar.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
