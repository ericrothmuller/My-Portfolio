import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
    const mediaQueryMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaQueryMatch.matches);
  
    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaQueryMatch.addEventListener(handler);
      return () => mediaQueryMatch.removeEventListener(handler);
    });
    return matches;
  };