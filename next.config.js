const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
const nextConfig = removeImports({
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    }
  }
});


module.exports = nextConfig;
