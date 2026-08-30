/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/olimpo-estepona",
        destination: "https://app.wordnext.tech/configurar",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
