import React from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInLink = ({ profileUrl }) => {
  return (
    <a
      href={profileUrl}
      className="flex justify-center items-center bg-[#27A5EF] bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin className="text-4xl" />
    </a>
  );
};

export default LinkedInLink;
