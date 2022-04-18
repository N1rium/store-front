import React, { useState, useEffect } from "react";

const useEthereum = ({
  onConnect = () => {},
  onDisconnect = () => {},
  onAccountsChanged = () => {},
} = {}) => {
  const [accounts, setAccounts] = useState([]);

  const signIn = async () => {
    const res = await ethereum.request({ method: "eth_requestAccounts" });
    setAccounts(res);
  };

  useEffect(() => {
    if (window.ethereum) {
      console.log("ETH: ", ethereum);
      ethereum.on("accountsChanged", onAccountsChanged);
      ethereum.on("connect", onConnect);
      ethereum.on("disconnect", onDisconnect);
      ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return [signIn, accounts];
};

export default useEthereum;
