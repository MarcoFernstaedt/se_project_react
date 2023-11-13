import { useEffect } from "react";

export const useEscape = (closeModal) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key.toLowerCase === "escape") {
        closeModal();
      }
    };

    document.addEventListener("keyDown", handleEscape);

    return () => {
      document.removeEventListener("keyDown", handleEscape);
    };
  }, [closeModal]);
};
