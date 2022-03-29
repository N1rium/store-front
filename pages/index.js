import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useUnity from "../hooks/use-unity";
import Web3 from "web3";
import Button from "../components/Button/Button";

export default function Home() {
  const canvasRef = useRef(null);
  const [init, unity] = useUnity({ url: "/Build/garage" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      if (web3.currentProvider.selectedAddress) {
        onSignedIn();
      }
    }
  }, [canvasRef]);

  const signIn = async () => {
    try {
      const resp = await ethereum.request({ method: "eth_requestAccounts" });
      onSignedIn();
    } catch (e) {
      console.warn(e);
    }
  };

  const onSignedIn = () => {
    setIsLoggedIn(true);
    init(canvasRef.current);
  };

  return (
    <div className="relative flex justify-center items-center w-full h-full bg-slate-800">
      <Head>
        <title>Storefront</title>
        <meta name="description" content="Storefront" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isLoggedIn && (
        <div className="text-center">
          <div className="text-white font-bold text-2xl mb-4">Storefront</div>
          <Button onClick={signIn}>Sign in with MetaMask</Button>
        </div>
      )}
      <canvas
        className={`absolute w-full h-full ${
          isLoggedIn ? "pointer-events-auto" : "pointer-events-none"
        }`}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
