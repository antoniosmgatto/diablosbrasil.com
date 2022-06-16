import React from "react";
import MediaQuery from "react-responsive";

const Link = (props) => {
  const { path, label } = props;

  return (
    <li className="mr-6">
      <a
        className="text-white text-lg focus:cursor-auto hover:opacity-90 hover:text-gray-100"
        href={path}
      >
        {label}
      </a>
    </li>
  );
};

const Desktop = (props) => {
  const { links } = props;

  return (
    <ul className="flex">
        {links.map((link) => (
        <Link key={link.path} {...link} />
        ))}
    </ul>
  );
};

export default Desktop;
