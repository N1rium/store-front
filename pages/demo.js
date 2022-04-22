import React, { useRef, useEffect } from "react";
import Head from "next/head";
import useUnity from "../hooks/use-unity";

export default function Home() {
  const canvasRef = useRef(null);
  const [init] = useUnity({ url: "/garage/Build/garage" });

  useEffect(() => {
    if (canvasRef) {
      init(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div className="w-full h-full">
      <Head>
        <title>BitRacing Demo</title>
        <meta name="description" content="BitRacing Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas
        id="unity-canvas"
        className="w-full h-full"
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
