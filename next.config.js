/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

//module.exports = nextConfig
module.exports = {
  compiler: {
    styledComponents: true,  // Enable built-in styled-components support
  },
  reactStrictMode: true,
};
