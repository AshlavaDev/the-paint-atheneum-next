//get the navbar height so that other components on the page can have position adjusted accordingly. Sets the height here from grabbing navbar

import { useState, useEffect, useRef } from "react";

export const useNavBarHeight = () => {
  const [navbarHeight, setNavBarHeight] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      setNavBarHeight(navRef.current.offsetHeight);
    }
  }, []);

  return { navbarHeight, navRef };
};
