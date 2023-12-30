import { useClickAway } from "react-use";
import { useRef, useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { routes } from "./routes";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  // Function to toggle body scrolling
  const toggleBodyScroll = () => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  };

  useEffect(() => {
    toggleBodyScroll(); // Toggle body scrolling initially based on isOpen
  }, [isOpen]);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden" style={{ zIndex: 999 }}>
      <div className="flex items-center justify-between p-5 ">
        <span className="text-2xl text-white font-poppins">
          TECH
          <span style={{ color: "#27A5EF" }}>NICA</span>
        </span>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="#fff" />
      </div>
      <div
        className={`fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-[2rem] bg-black opacity-85 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="grid gap-2">
          {routes.map((route, idx) => (
            <li
              key={route.title}
              className="w-full p-[0.08rem]  border-b-2 hover:border-black transition-all duration-500   backdrop-blur-3xl"
            >
              <a
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center justify-center w-full p-5 rounded-xl backdrop-blur"
                href={route.href}
              >
                <span className="text-lg font-bold hover:text-[#27A5EF] transition-all duration-500 font-poppins text-white">
                  {route.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
