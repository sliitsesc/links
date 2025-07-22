/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/se-day-25",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfOM8A1A819VNWHNjj8RU0b7Olgu7tjPqwqYsSSB5phca8UGQ/viewform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
