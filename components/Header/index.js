import React from "react";
import Menu from "./Menu/";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="w-100 h-auto xl:h-48 flex justify-end items-center py-6 px-8 xl:px-20">
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
