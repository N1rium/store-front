/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const gzipped = (path = "") => {
      return [
        {
          source: `${path}.framework.js.gz`,
          headers: [
            {
              key: "Content-Encoding",
              value: "gzip",
            },
          ],
        },
        {
          source: `${path}.wasm.gz`,
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
          source: `${path}.data.gz`,
          headers: [
            {
              key: "Content-Encoding",
              value: "gzip",
            },
          ],
        },
      ];
    };

    return [
      ...gzipped("/garage/Build/garage"),
      ...gzipped("/transparent/Build/transparent"),
    ];
  },
};

module.exports = nextConfig;
