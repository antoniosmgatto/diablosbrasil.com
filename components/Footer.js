import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full h-screen bg-[url('/photos/diablos_mc_estrada_5.jpg')] bg-top bg-cover bg-no-repeat flex flex-col justify-between text-center p-5 lg:px-20 lg:py-10"
    >
      <div>
        <h4 className="uppercase font-old-stamper text-3xl">Sede</h4>

        <address className="text-xl mt-6">
          <div>Rua Joaquim Nabuco, 18</div>
          <div>Cidade Jardim, São José dos Pinhais - PR</div>
          <div>83040-210</div>
        </address>
      </div>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between">
        <ul className="flex justify-between w-40">
          <li>
            <a
              href="https://www.facebook.com/diablosmcbrasil"
              target="blank"
              rel="nofollow"
            >
              <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/diablosmcbrasil"
              target="blank"
              rel="nofollow"
              className="ml-4"
            >
              <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/channel/UCLtesRXmcG3QM2u4jIuUw0w"
              target="blank"
              rel="nofollow"
              className="ml-4"
            >
              <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
            </a>
          </li>
        </ul>

        <div className="mt-10 lg:mt-0">
          &copy; {currentYear} Diablos MC Brasil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
