import judge1 from "../imageForWebsite/judge1.jpg";
import judge3 from "../imageForWebsite/judge3.jpeg";
import LinkedInLink from "./LinkdinLink";
import { FaUserTie } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

function Judges() {
  return (
    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 mx-auto">
      <h1 className="text-white md:text-7xl text-4xl md:mb-5 font-Michroma ">
        JU<span className="text-[#27A5EF]">DGES</span>
      </h1>
      <div className="min-h-screen bg-black flex flex-col justify-center py-6 sm:py-12">
        <div className="sm:px-10 x-20 max-md:px-20 lg:px-40 container justify-center">
          <div className="md:grid md:px-6 md:gap-16 md:grid-cols-2 md:justify-center max-md:justify-center">
            <article className="shadow-whit text-white p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
              <div className="relative mb-4 rounded-2x">
                <img
                  className="max-h-56 rounded-2xl w-full object-scale-down transition-transform duration-300 transform group-hover:scale-105"
                  src={judge1}
                  alt="Sakshi Saini"
                />
                <LinkedInLink
                  profileUrl={
                    "https://www.linkedin.com/in/sakshi-saini-741414181/"
                  }
                />
              </div>
              <div className="flex justify-between items-center w-full pb-4 mb-auto">
                <div className="flex items-center">
                  <div className="flex flex-1">
                    <div>
                      <p className="text-sm font-semibold">
                        Sakshi <span className="text-[#27A5EF]">Saini</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="text-sm flex items-center text-white gap-2">
                    HR Associate
                    <BsPersonLinesFill className="" />
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-xl leading-8">
                <a
                  href="#2"
                  className="block md:text-base max-md:text-sm relative group-hover:text-[#27A5EF] text-left transition-colors duration-200"
                >
                  Sakshi has been awarded an MBA degree in Human Resources from
                  UPES, Dehradun. Currently serving as a HR Associate at Value
                  Creed and doing end to end recruitment globally.
                </a>
              </h3>
            </article>
            <article className="shadow-white text-white p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
              <div className="relative mb-4 rounded-2xl">
                <img
                  className="max-h-56 rounded-2xl w-full object-scale-down transition-transform duration-300 transform group-hover:scale-105"
                  src={judge3}
                  alt="Prassan Iyer"
                />
                <LinkedInLink
                  profileUrl={"https://www.linkedin.com/in/iyerprasanna/"}
                />
              </div>
              <div className="flex justify-between items-center w-full pb-4 mb-auto">
                <div className="flex items-center">
                  <div className="flex flex-1">
                    <div>
                      <p className="text-sm font-semibold">
                        Prassan <span className="text-[#27A5EF]">Iyer</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="text-sm flex items-center gap-2 text-white">
                    Director of Technology
                    <FaUserTie />
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-xl leading-8">
                <a
                  href="#2"
                  className="block relative md:text-base max-md:text-sm group-hover:text-[#27A5EF] text-left transition-colors duration-200"
                >
                  Prasanna has a rich knowledge of the energy/commodities domain
                  as a technology leader. He has developed & materialized
                  tactical competency roadmaps for techno- functional expertise
                  & currently serving as a director at Value Creed.
                </a>
              </h3>
            </article>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb">
            {/* More articles */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Judges;
