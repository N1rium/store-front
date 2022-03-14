import React, { useRef, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useUnity from "../hooks/use-unity";

export default function Home() {
  const canvasRef = useRef(null);
  const [init, unity] = useUnity({
    url: "/_carpreview/Build/car-test",
  });

  useEffect(() => {
    if (canvasRef.current) {
      init(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Storefront</title>
        <meta name="description" content="Storefront" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas className={styles.canvas} ref={canvasRef}></canvas>
    </div>
  );
}
