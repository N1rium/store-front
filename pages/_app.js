import "../styles/globals.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-X2P5QC1KB2" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
