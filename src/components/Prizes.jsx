import React, { useState, useEffect } from "react";
import prizesScreenDesktop from "../imageForWebsite/prizes_screen.webp";
import prizesScreenMobile from "../imageForWebsite/mobile_prizes.webp";
import p4 from "../imageForWebsite/comets/p4.png";
import p1 from "../imageForWebsite/comets/p1.png";

function Prizes() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="prizes" className="  max-sm:-mt-40 mb-16  max-md:-mt-80 md:mt-64 ">
      <p className="Schtitle font-Michroma text-center mb-8">
        <span className="heading heading1">PR</span>
        <span className="heading heading2">IZES</span>
      </p>
      <div className="relative inset-0 flex flex-col items-center justify-center">
        <img
          src={isMobileView ? prizesScreenMobile : prizesScreenDesktop}
          alt="Prizes Screen"
          style={{ width: "80%", height: "80%" }}
          className="w-80 h-80 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-104 xl:h-104 2xl:w-120 2xl:h-120"
        />
        <img
          src={p4}
          alt="Comet"
          className="comet -z-20 absolute bottom-24 max-md:left-0 left-6 md:w-1/12 w-16"
        />
        <img
          src={p1}
          alt="Comet"
          className="comet -z-20 absolute top-24 max-md:right-3 right-8 md:w-1/12 w-16"
        />
      </div>
    </div>
  );
}

export default Prizes;
