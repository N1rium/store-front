import { useState, useEffect } from "react";

const useKey = ({ key = null, shift = null, onKeyPress = () => {} } = {}) => {
  const [data, setData] = useState(null);
  const keyDown = (e) => {
    if (!key) {
      setData(e);
      onKeyPress(e);
    }
    if (key && e.key === key) {
      if (shift && e.shiftKey) {
        setData(e);
        onKeyPress(e);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, []);

  return data;
};

export default useKey;
