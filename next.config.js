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

    const brotli = (path = "") => {
      return [
        {
          source: `${path}.framework.js.br`,
          headers: [
            {
              key: "Content-Encoding",
              value: "br",
            },
          ],
        },
        {
          source: `${path}.wasm.br`,
          headers: [
            {
              key: "Content-Type",
              value: "application/wasm",
            },
            {
              key: "Content-Encoding",
              value: "br",
            },
          ],
        },
        {
          source: `${path}.data.br`,
          headers: [
            {
              key: "Content-Encoding",
              value: "br",
            },
          ],
        },
      ];
    };

    return [
      ...gzipped("/transparent/Build/transparent"),
      ...gzipped("/reward/Build/reward"),
      ...gzipped("/etherraid/Build/bnbclash"),
      ...brotli("/etherraid/Build/brotli"),
    ];
  },
};

module.exports = nextConfig;
