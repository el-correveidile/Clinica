/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/olimpo-estepona",
        destination: "https://webs.blablaele.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
