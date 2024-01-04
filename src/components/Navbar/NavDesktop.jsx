import { useEffect } from "react";
import { routes } from "./routes";

export const NavDesktop = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      // Add any additional logic here if needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-6 bg-transparent">
      <span className="text-lg md:text-4xl text-white font-poppins mb-2 md:mb-0">
        TECH
        <span className="text-[#27A5EF]">NICA</span>
      </span>
      <ul className="hidden lg:flex lg:items-center mr-5 gap-12 text-2xl">
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <li key={title}>
              <a
                href={href}
                className="flex items-center gap-1 hover:text-[#27A5EF] hover:scale-110 duration-500 transition-all text-white font-poppins"
                onClick={(e) => handleNavLinkClick(e, href)}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
