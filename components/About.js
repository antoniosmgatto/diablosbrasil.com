import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const AboutSection = (props) => {
  const { className, style, bgPosition, children } = props;

  const cssRules = [
    "w-full h-screen flex justify-center items-center p-5 lg:px-20 lg:py-10",
    `bg-${bgPosition} bg-cover bg-no-repeat`,
    className,
  ];

  return (
    <div className={classNames(cssRules)} style={style}>
      <p className="text-center text-2xl leading-loose lg:w-8/12">{children}</p>
    </div>
  );
};

AboutSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  bgPosition: PropTypes.oneOf(["top", "center", "bottom"]),
  children: PropTypes.node,
};

const About = () => {
  return (
    <section id="about" className="w-full h-auto">
      <AboutSection
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/photos/diablosmc-estrada-1.jpeg')",
        }}
        bgPosition="center"
      >
        <strong>DIABLOS</strong>,<br /> termo geralmente utilizado para designar
        a entidade excluída do céu.
      </AboutSection>

      <AboutSection
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('/photos/diablosmc-estrada-2.jpeg')",
        }}
        bgPosition="center"
      >
        Muitas vezes, também, somos excluídos pela sociedade, por nossos
        comportamentos, nossas idéias, pelo nosso visual e etc, que não condizem
        com a moda atualmente imposta para o ser humano. inferno.
      </AboutSection>

      <AboutSection
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/photos/diablosmc-estrada-3.jpeg')",
        }}
        bgPosition="center"
      >
        Este é o <strong>DIABLOS MC</strong>. <br />
        Associação de motociclistas que buscam os verdadeiros ideais de
        liberdade e expressão, pelas longas estradas desse inferno.
      </AboutSection>
    </section>
  );
};

export default About;
