/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/common"],
  output: "standalone",
};

export default nextConfig;
