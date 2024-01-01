import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import twitterLogo from "../imageForWebsite/twitter.png";
import { FaDiscord } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer" className="mobile relative w-full -mt-12 md:mt-6 ">
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="mt-12 flex w-full flex-col items-center justify-center py-12 md:flex-row md:justify-between">
          <p className="mb-4 text-center text-sm font-normal text-white md:mb-0">
            <a href="https://istevit.in/" className="text-white">
              Made with {"\u2764"} by ISTE-VIT
            </a>
          </p>
          <div className="flex gap-4 text-white sm:justify-center">
            <a
              href="https://bit.ly/Technica-Discord"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <FaDiscord className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/iste_vitvellore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#27A5EF] transition-all duration-300"
              style={{ marginTop: "-6px", marginRight: "-7px" }}
            >
              <img src={twitterLogo} alt="Twitter Logo" className="h-11 w-9" />
            </a>
            <a
              href="https://www.youtube.com/@ISTEVITVellore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <FaYoutube className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/iste_vit_vellore/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/indian-society-for-technical-education/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
