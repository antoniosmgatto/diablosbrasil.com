import React from "react"

const HomeSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-around text-center font-old-stamper">
      <div className="flex flex-col items-center">
        <img
          src="./diablos_logo.png"
          className="object-cover h-72 lg:h-96"
          alt="Diablos MC Brasil Logo"
        />

        <h1 className="text-5xl lg:text-6xl mt-10">Diablos MC Brasil</h1>
      </div>

      <div>
        <h3 className="text-2xl">Sanjo Originals</h3>
        <h5 className="text-lg lg:mt-4">4.13.3</h5>
      </div>
    </div>
  );
};

export default HomeSection;