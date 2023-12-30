import React from "react";
import bulletin from "../imageForWebsite/bulletin.webp";
import { useParallax } from "react-scroll-parallax";

function Schedule() {
  const dayContent = {
    day1: [
      "9:00 Inauguration ",
      "10:00 Hackathon Starts",
      "16:00 Review 1",
      "19:00 Results",
      "23:00 Ice Breaking Session",
    ],
    day2: [
      "3:00 Review 2",
      "6:00 Results",
      "11:00 Project Work and Prototyping",
      "16:00 Speaker Session",
      "18:00 Mentor Interaction",
      "23:00 Ice Breaking Session",
    ],
    day3: [
      "3:00 Review 3",
      "5:30 Final Round",
      "6:00 Presentation Preparation",
      "9:00 Final Pitches",
      "12:00 Prize Distribution",
    ],
  };
  const scroll =
    useParallax <
    HTMLDivElement >
    {
      scale: [0.5, 1, "easeInQuad"],
    };

  return (
    <>
      <div className="flex flex-col md:flex-row md:pt-14">
        <div className="Mainapp flex flex-col text-white ml-4 md:ml-20">
          <div className="Schtitle font-Michroma text-3xl md:text-5xl flex justify-center items-center pt-8 md:pt-40 pr-4 ">
            <span className="heading heading1">SCHE</span>
            <span className="text-[#27A5EF] heading heading2">DULE</span>
          </div>
          <div className="mainBody ml-20 sm:ml-10 xs:ml-20 flex justify-center md:justify-start items-center md:items-start pt-8 md:pt-40 pr-4 md:pr-64 pb-8">
            <div className="daycon flex flex-col md:pl-20">
              <div className="day1 flex flex-col mb-6 md:ml-72 md:mt-20">
                <div
                  ref={scroll.ref}
                  className="daytitle font-Changa text-4xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin hover:text-7xl md:hover:text-8xl duration-300 delay-100 mb-4"
                >
                  <div className="text-left md:pb-10 ">DAY - 1</div>
                </div>
                <div className="daycon flex flex-col w-96">
                  {dayContent.day1.map((content, index) => (
                    <div
                      key={index}
                      className="content flex text-sm md:text-base md:hover:text-lg duration-200 delay-100 mb-2"
                    >
                      <div className="p-2 shrink-0">
                        <img
                          src={bulletin}
                          alt="bulletin"
                          className="h-5 animate-spin-slow hover:animate-spin delay-150"
                        />
                      </div>
                      <div className="p-2 schedule-text">{content}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="day2 flex flex-col mt-4  md:ml-20">
                <div className="daytitle font-Changa text-4xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin hover:text-7xl md:hover:text-8xl duration-200 delay-100 md:mt-64">
                  <h1 className="text-left pb-10 md:pt-8">DAY - 2</h1>
                </div>
                <div className="daycon flex flex-col md:pb-40 w-96">
                  {dayContent.day2.map((content, index) => (
                    <div
                      key={index}
                      className="content flex text-sm md:text-base md:hover:text-lg duration-200 delay-100 mb-2"
                    >
                      <div className="p-2 shrink-0">
                        <img
                          src={bulletin}
                          alt="bulletin"
                          className="h-5 animate-spin-slow hover:animate-spin-slow delay-150"
                        />
                      </div>
                      <div className="p-2 schedule-text">{content}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="day3 flex flex-col mt-4 md:ml-60">
                <div className="daytitle font-Changa text-4xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin hover:text-7xl md:hover:text-8xl duration-200 delay-100 md:mt-20">
                  <h1 className="text-left pb-10 md:pt-3">DAY - 3</h1>
                </div>
                <div className="daycon flex flex-col md:pb-40 w-96">
                  {dayContent.day3.map((content, index) => (
                    <div
                      key={index}
                      className="content flex text-sm md:text-base md:hover:text-lg duration-200 delay-100 mb-2"
                    >
                      <div className="p-2 shrink-0">
                        <img
                          src={bulletin}
                          alt="bulletin"
                          className="h-5 animate-spin-slow hover:animate-spin-slow delay-150"
                        />
                      </div>
                      <div className="p-2 schedule-text">{content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
