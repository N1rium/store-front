import React, { useState, useEffect } from "react";

const useUnity = ({ url = "" }) => {
  const [unity, setUnity] = useState(null);

  const init = (canvas = null) => {
    if (!canvas) {
      console.warn("Please specify a canvas reference");
      return;
    }

    const buildUrl = "Build";
    const loaderUrl = url + ".loader.js";
    const config = {
      dataUrl: url + ".data",
      frameworkUrl: url + ".framework.js",
      codeUrl: url + ".wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "StoreFront",
      productVersion: "0.1",
      //showBanner: unityShowBanner,
    };

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress) => {
        //progressBarFull.style.width = 100 * progress + "%";
      })
        .then((unityInstance) => {
          //loadingBar.style.display = "none";
          /*fullscreenButton.onclick = () => {
              unityInstance.SetFullscreen(1);
            };*/
          setUnity(unityInstance);
        })
        .catch((message) => {
          alert(message);
        });
    };
    document.body.appendChild(script);
  };

  return [init, unity];
};

export default useUnity;
