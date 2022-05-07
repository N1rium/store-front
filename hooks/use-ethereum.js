import React, { useState, useEffect } from "react";

const useEthereum = ({
  onConnect = () => {},
  onDisconnect = () => {},
  onAccountChanged = () => {},
  onSignIn = () => {},
} = {}) => {
  const [account, setAccount] = useState(null);

  const signIn = async () => {
    const res = await ethereum.request({ method: "eth_requestAccounts" });
    setAccount(res[0]);
    onSignIn(res[0]);
  };

  useEffect(() => {
    if (window.ethereum) {
      ethereum.on("accountsChanged", (data) => {
        onAccountChanged(data[0]);
        setAccount(data[0]);
      });
      ethereum.on("connect", onConnect);
      ethereum.on("disconnect", onDisconnect);
      ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      if (window?.ethereum?.selectedAddress) {
        const acc = window.ethereum.selectedAddress;
        onSignIn(acc);
        setAccount(acc);
      }
    }
  }, []);

  return [signIn, account];
};

export default useEthereum;
