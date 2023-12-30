import React, { useState, useEffect } from "react";
import logo from "../imageForWebsite/logo.jpg";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <img 
      src={logo}
      alt="Custom Cursor"
      className="custom-cursor z-50"
      style={{ left: `${position.x}px`, top: `${position.y}px `}}
    />
  );
};

export default CustomCursor;
