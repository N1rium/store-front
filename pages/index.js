import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import useUnity from "../hooks/use-unity";
import useEthereum from "../hooks/use-ethereum";
import Web3 from "web3";
import Button from "../components/Button/Button";

export default function Home() {
  const canvasRef = useRef(null);
  const [init, unity] = useUnity({ url: "/garage/Build/garage" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMode, setErrorMode] = useState(false);

  const [signIn, accounts] = useEthereum({
    onAccountsChanged: (data) => {
      if (data.length) {
        onSignedIn();
      }
    },
  });

  useEffect(() => {
    if (window.ethereum && ethereum.isMetaMask) {
      window.web3 = new Web3(window.ethereum);
      if (web3.currentProvider.selectedAddress) {
        onSignedIn();
      }
    } else {
      setErrorMode(true);
    }
  }, [canvasRef]);

  const onSignedIn = () => {
    setIsLoggedIn(true);
    init(canvasRef.current);
  };

  if (errorMode) {
    return (
      <div className="relative flex justify-center items-center w-full h-full bg-slate-800">
        <Head>
          <title>Storefront</title>
          <meta name="description" content="Storefront" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="text-center">
          <div className="text-white font-bold text-2xl mb-4">
            Metamask required!
          </div>
          <Button
            onClick={() => (window.location.href = "https://metamask.io/")}
          >
            Go to Metamask
          </Button>
        </div>
      </div>
    );
  }

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
        id="unity-canvas"
        className={`absolute w-full h-full ${
          isLoggedIn ? "pointer-events-auto" : "pointer-events-none"
        }`}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
