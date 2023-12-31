import React, { useState, useEffect } from "react";
import Rover1 from "../imageForWebsite/combi_desk.webp";
import Rover2 from "../imageForWebsite/combi_mob.webp";
import TrackCard from "./TrackCard";
import ML from "../imageForWebsite/ML.png";
import OpenIno from "../imageForWebsite/OpenIno.png";
import Fintech from "../imageForWebsite/FinTech.png";
import hardware from "../imageForWebsite/Hardware.png";
import p2 from "../imageForWebsite/comets/p2.png";
import CustomeCursor from "../components/CustomeCursor";

function Tracks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-screen cursor-none relative h-screen sm:mt-6 md:mt-8 lg:mt-12"
      id="tracks"
    >
      <img
        src={p2}
        alt="Comet"
        className="comet absolute bottom-52 max-md:left-10 left-56 md:w-1/12 w-16"
      />
      <CustomeCursor />
      <div className="relative inset-0 flex justify-left ">
        <img
          src={isMobile ? Rover2 : Rover1}
          alt="Rover"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        className={`absolute ${
          isMobile
            ? " max-md:top-[10%] top-[22%] right-[60%] w-1 h-1/4"
            : "top-[15%] left-2/3 h-1/2 md:top-[30%] md:left-3/4 md:transform md:-translate-x-1/2 md:h-1/4 lg:left-[80%] lg:h-1/8 lg:top:[30%"
        } flex flex-col gap-0 md:gap-4 lg:gap-0`}
      >
        <TrackCard title="Technic.ai" icon={ML} positionRight={true} />
        <TrackCard title="Hardware" icon={Fintech} positionRight={false} />
        <TrackCard
          title="Open Innovation"
          icon={OpenIno}
          positionRight={true}
        />
        <TrackCard title="Fin-tech" icon={hardware} positionRight={false} />
      </div>
    </div>
  );
}

export default Tracks;
