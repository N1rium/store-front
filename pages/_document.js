import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X2P5QC1KB2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X2P5QC1KB2');
        `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
