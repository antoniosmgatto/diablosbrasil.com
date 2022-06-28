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
    appear: "opacity-20",
    appearActive: "opacity-30",
    appearDone: "opacity-40",
    enter: "opacity-50",
    enterActive: "opacity-60",
    enterDone: "opacity-85",
    exit: "opacity-50",
    exitActive: "opacity-30",
    exitDone: "opacity-0",
  };

  return (
    <div>
      <button onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} color="white" size="2x" />
      </button>

      <CSSTransition
        in={isOpen}
        timeout={150}
        classNames={animationClasses}
        unmountOnExit
      >
        <div className="w-screen h-screen fixed top-0 right-0 bg-black flex flex-col space-around pl-12 pr-8 pt-6 transition-opacity ease-in">
          <header className="w-100 mb-10 flex justify-end">
            <button onClick={handleMenuClick}>
              <FontAwesomeIcon icon={faXmark} color="white" size="2x" />
            </button>
          </header>

          <ul className="grow">
            <Link path="/" label="Home" />

            {links.map((link) => (
              <Link key={link.label} {...link} onClick={handleMenuClick} />
            ))}
          </ul>

          <div className="text-xl text-center pb-24">4.13.3</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Mobile;
