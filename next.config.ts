import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  webpack(config) {
    // Add support for .glb files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/files/',
          outputPath: 'static/files/',
        }
      }
    });
    
    return config;
  }
};

export default nextConfig;
