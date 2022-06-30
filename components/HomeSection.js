import React from "react"

const HomeSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-around items-center text-center font-old-stamper">
      <img
        src="escudo_transparente_branco.png"
        className="object-cover px-8 lg:w-2/6"
        alt="Diablos MC Brasil Logo"
      />

      <div>
        <h3 className="text-2xl">Sanjo Originals</h3>
        <h5 className="text-lg lg:mt-4">4.13.3</h5>
      </div>
    </div>
  );
};

export default HomeSection;