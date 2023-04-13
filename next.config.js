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
      ...gzipped("/transparent/Build/transparent"),
      ...gzipped("/reward/Build/reward"),
      ...gzipped("/etherraid/Build/bnbclash"),
    ];
  },
};

module.exports = nextConfig;
