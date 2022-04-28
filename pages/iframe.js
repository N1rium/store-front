import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>BitRacing Demo</title>
        <meta name="description" content="BitRacing Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        src="/demo"
        className="webgl-content"
        scrolling="no"
        frameBorder="1"
        marginHeight="px"
        marginWidth="960px"
        height="600"
        width="960px"
      />
    </div>
  );
}
