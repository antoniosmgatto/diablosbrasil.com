import React from "react";
import Menu from "./Menu/";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="w-100 h-auto xl:h-48 flex justify-between items-center py-6 px-8 xl:px-20">
        <div className="w-48 xl:w-96">
          <a href="#">
            <img src="/diablos_logo_topo.png" alt="Diablos MC Brasil" />
          </a>
        </div>

        <Menu />
      </nav>
    </header>
  );
};

export default Header;
