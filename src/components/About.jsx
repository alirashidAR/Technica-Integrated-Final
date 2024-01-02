import React, { useState, useEffect } from "react";
import p1 from "../imageForWebsite/comets/p1.png";
import p2 from "../imageForWebsite/comets/p2.png";

function About() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className=" relative h-screen max-sm:-mt-4 mb-2 max-md:-mt-36 -mt-32"
      id="about"
      style={{ zIndex: 40000 }}
    >
      <div className="flex flex-col items-center justify-center h-screen relative min-h-screen bg-cover bg-center bg ">
        <p className="Schtitle font-Michroma text-center mb-8">
          <span className="heading heading1">AB</span>
          <span className="heading heading2">OUT</span>
        </p>
        <p className="text-white font-poppins leading-loose text-left tracking-wide p-4 mx-2 md:mx-28 mb-8 text-sm md:text-base lg:text-lg">
          {!isMdScreen
            ? "The Indian Society for Technical Education (ISTE) champions technical education initiatives. Its flagship event, Horizon 2023, draws 1500+ participants to a three-day national technical summit. A highlight within Horizon is Technica, a 48-hour hackathon engaging 1000 participants. Technica aims to inspire innovation across diverse technological fields, fostering talent showcase and healthy competition for a promising future."
            : "The Indian Society for Technical Education (ISTE) is a non-profit technical student chapter dedicated to orchestrating an array of technical workshops and hackathons, fostering a robust technical community. In this pursuit, we're hosting our events in Horizon 2023, one of India’s grandest technical fests, offering a diverse spectrum of events. Horizon stands tall as an annual three-day national technical summit by ISTE-VIT, encompassing a colossal hackathon, Technica, and a plethora of workshops spanning Web Development, Machine Learning, pure Electronics, IoT, Web3, App Development, and Competitive Coding. This summit is among the largest technical gatherings, attracting over 1500 participants, aiming for technical excellence, innovation, and specialized technical education. Technica, a 48-hour hackathon within Horizon, aims to inspire participants to surpass their limits in the pursuit of excellence. With approximately 1000 participants, it cultivates creative ideas for a more promising technological future. Technica is a multi-domain hackathon fostering innovative technical solutions in areas like Education, Fin-Tech, AI, Hardware, and Open Innovation. It's a platform for showcasing talent and encouraging healthy peer competition."}
        </p>
      </div>
      <img
        src={p1}
        alt="Comet"
        className="comet absolute bottom-0 max-md:bottom-24 right-0 md:w-1/12 w-16"
      />
      <img
        src={p2}
        alt="Comet"
        className="comet absolute top-10 max-md:top-20 left-0 md:w-1/12 w-16"
      />
    </div>
  );
}

export default About;
