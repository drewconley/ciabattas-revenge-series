import { useEffect } from "react";

export function useKeyPress(key, callback) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === key) {
        callback();
      }
    };

    //Add to document
    document.addEventListener("keydown", handler);

    //Remove from document on unmount
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [key, callback]);
}
