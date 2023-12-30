import React, { useState, useEffect } from 'react';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './NavDesktop';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 10 }}>
      {windowWidth < 768 ? ( <NavMobile /> ) : ( <NavDesktop /> )}
    </div>
  );
};

export default Navbar;
