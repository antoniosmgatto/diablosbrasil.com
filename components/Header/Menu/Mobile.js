import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

const Link = (props) => {
  const { label, path, ...otherProps } = props;

  return (
    <li className="text-center py-6">
      <a
        className="font-old-stamper text-white text-5xl"
        href={path}
        {...otherProps}
      >
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

  const animationClasses = {
    appear: "opacity-10",
    appearActive: "opacity-20",
    appearDone: "opacity-25",
    enter: "opacity-50",
    enterActive: "opacity-75",
    enterDone: "opacity-80",
    exit: "opacity-75",
    exitActive: "opacity-50",
    exitDone: "opacity-25",
  };

  return (
    <div>
      <button className="w-8" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} color="white" size="2x" />
      </button>

      <CSSTransition
        in={isOpen}
        timeout={150}
        classNames={animationClasses}
        unmountOnExit
      >
        <div className="w-screen h-screen fixed top-0 right-0 bg-black flex flex-col space-around px-8 pt-6 transition-opacity ease-in-out duration-300">
          <header className="w-100 mb-10 flex justify-end">
            <button className="w-8 rounded-lg" onClick={handleMenuClick}>
              <FontAwesomeIcon icon={faXmark} color="white" size="2x" />
            </button>
          </header>

          <ul className="grow">
            <Link path="/" label="Home" />

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
