import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

const Link = (props) => {
  const { label, path, ...otherProps} = props;

  return (
    <li className="mr-6 pb-5">
      <a className="text-black text-xl" href={path} {...otherProps}>
        {label}
      </a>
    </li>
  );
};

//transition-opacity duration-700 ease-in opacity-0
const Mobile = (props) => {
  const { links } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} color="white" size="2x" />
      </button>

      <CSSTransition
        in={isOpen}
        timeout={100}
        classNames="z-80"
        unmountOnExit
      >
        <div className="h-screen w-screen fixed top-0 right-0 bg-white pl-12 pr-8 py-8">
          <header className="w-100 flex justify-between mb-10">
            <div className="w-48">
              <a href="#">
                <img src="/diablos_logo_topo.png" alt="Diablos MC Brasil" />
              </a>
            </div>

            <button onClick={handleMenuClick}>
              <FontAwesomeIcon icon={faXmark} color="black" size="2x" />
            </button>
          </header>

          <ul>
            <Link path="/" label="Início" />

            {links.map((link) => (
              <Link key={link.label} {...link} onClick={handleMenuClick} />
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Mobile;
