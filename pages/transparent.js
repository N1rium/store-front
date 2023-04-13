import React, { useRef, useEffect } from "react";
import Head from "next/head";
import useUnity from "../hooks/use-unity";

// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"

export default function Home() {
  const canvasRef = useRef(null);
  const [init] = useUnity({
    url: "/etherraid/Build/bnbclash",
  });

  useEffect(() => {
    if (canvasRef) {
      init(canvasRef.current, ".gz");
      document.getElementById("unity-canvas").focus();
    }
  }, [canvasRef]);

  return (
    <div className="w-full h-full">
      <Head>
        <title>BitRacing Demo</title>
        <meta name="description" content="BitRacing Demo" />
        <meta content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style global jsx>
        {`
          html,
          body {
            background: transparent !important;
          }
        `}
      </style>
      <canvas
        id="unity-canvas"
        className="w-full h-full"
        ref={canvasRef}
        style={{ position: "absolute", top: "0", left: "0" }}
      ></canvas>
    </div>
  );
}
