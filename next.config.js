/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
  },
  i18n: {
    locales: ['en', 'zh', 'zhHant', 'ko', 'ru', 'jp', 'pt'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

module.exports = nextConfig 