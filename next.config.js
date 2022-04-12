/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/race-simulation/Build/race-simulation.framework.js.gz",
        headers: [
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
      {
        source: "/race-simulation/Build/race-simulation.wasm.gz",
        headers: [
          {
            key: "Content-Type",
            value: "application/wasm",
          },
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
      {
        source: "/race-simulation/Build/race-simulation.data.gz",
        headers: [
          {
            key: "Content-Encoding",
            value: "gzip",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
