import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
   const links = [
     { path: "#about", label: "História" },
     { path: "#photos", label: "Fotos" },
     { path: "#contact", label: "Contato" },
   ];

   const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)'})

  return (
    <div>
      { isBigScreen ? <Desktop links={links} /> : <Mobile links={links} /> }
    </div>
  );
};

export default Menu;
