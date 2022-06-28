import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
   const links = [
     { path: "#about", label: "Historia" },
     { path: "#contact", label: "Contato" },
   ];

   const [mounted, setMounted] = useState(false);
   const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)'})

   useEffect(() => { setMounted(true)}, [])

  return (
    <>
      { mounted && (isBigScreen ? <Desktop links={links} /> : <Mobile links={links} />)}
    </>
  );
};

export default Menu;
