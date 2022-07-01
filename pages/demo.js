import React, { useRef, useEffect } from "react";
import Head from "next/head";
import useUnity from "../hooks/use-unity";

export default function Home() {
  const canvasRef = useRef(null);
  const [init, { loading, progress }] = useUnity({
    url: "/garage/Build/garage",
  });

  useEffect(() => {
    if (canvasRef) {
      init(canvasRef.current);
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
      <div id="demo-loader" className={loading === true ? "loading" : "loaded"}>
        <div>
          <div></div>
          <div></div>
        </div>
        <img src="/img/bitracing.png" />
        {progress != 1 && (
          <div className="text-white text-4xl absolute top-4 left-4">
            {(progress * 100).toFixed(2)}%
          </div>
        )}
      </div>
      <canvas
        id="unity-canvas"
        className="w-full h-full"
        ref={canvasRef}
        style={{ position: "absolute", top: "0", left: "0" }}
      ></canvas>
    </div>
  );
}
