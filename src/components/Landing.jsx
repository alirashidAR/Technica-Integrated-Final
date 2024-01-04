import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

function Landing() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          color: 0x000000,
          waveHeight: 20,
          shininess: 50,
          waveSpeed: 1.5,
          zoom: 0.75,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className=" text-center min-h-screen" ref={vantaRef}>
      <Navbar />
      <div className="text-white text-xl ont-poppins px-5">
        <div className=" font-bold">
          Value <span className="text-[#27A5EF]">Creed</span>
        </div>
        <div className=" ">&</div>
        <div className=" font-bold">
          Indian Society for
          <span className="text-[#27A5EF]"> Technical Education</span>
        </div>
        <div className="max-md:text-lg ">presents</div>
      </div>
      <div className=" flex  justify-center items-center py-2">
        <img
          src="./images/Logo.webp"
          className="md:h-68 h-64"
          alt="logo of website"
        />
      </div>
      <h1 className="text-white md:text-6xl text-4xl pt-2 font-poppins text-center">
        T E C H <span className="text-[#27A5EF]">N I C A</span>
      </h1>
      <div className="pt-4">
        <h2 className="text-white md:text-3xl text-2xl ">
          Innovate | <span className="text-[#27A5EF]">Ideate</span> | Inspire
        </h2>
      </div>
      <h3 className="text-white pt-4 text-2xl">11th - 13th January 2024</h3>
      <div className="pt-4 ">
        <button
          type="button"
          name="Register"
          className="bg-transparent hover:bg-[#27A5EF] text-white font-semibold hover:text-black py-2 px-4 border border-[#27A5EF] hover:border-transparent rounded"
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}

export default Landing;
