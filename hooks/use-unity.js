import { useState } from "react";

const useUnity = ({ url = "" }) => {
  const [unity, setUnity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const init = (canvas = null, gzipSuffix = "") => {
    if (!canvas) {
      console.warn("Please specify a canvas reference");
      return;
    }

    const loaderUrl = url + ".loader.js";
    const config = {
      dataUrl: url + ".data" + gzipSuffix,
      frameworkUrl: url + ".framework.js" + gzipSuffix,
      codeUrl: url + ".wasm" + gzipSuffix,
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "StoreFront",
      productVersion: "0.1",
    };

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress) => {
        setLoading(true);
        setProgress(progress);
      })
        .then((unityInstance) => {
          setProgress(1);
          setUnity(unityInstance);
          setLoading(false);
        })
        .catch((message) => {
          alert(message);
        });
    };
    document.body.appendChild(script);
  };

  return [init, { ...unity, loading, progress }];
};

export default useUnity;
