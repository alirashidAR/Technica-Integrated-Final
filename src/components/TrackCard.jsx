import React, { useState } from 'react';

const TrackCard = ({ title, icon, positionRight }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    perspective: '1500px', 
  };

  const iconPosition = positionRight ? 'flex-row-reverse' : 'flex-row';
  const titleMarginClass = (title === 'TRACK 01' || title === 'TRACK 03') ? 'mr-5' : 'mr-5';

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Adjust the rotation angles based on positionRight
  const rotationX = positionRight ? '20deg' : '20deg';
  const rotationY = positionRight ? '-36deg' : '36deg';
  const rotationZ = positionRight ? '6deg' : '-6deg';

  const iconStyles = {
    transform: isHovered ? `rotateX(${rotationX}) rotateY(${rotationY}) rotateZ(${rotationZ})` : 'rotate(0)',
    borderRadius: '0.375em',
    boxShadow: '2px 10px 30px hsla(0, 0%, 0%, 0.25)',
    transition: 'transform 0.3s',
  };

  return (
    <div
      className={`bg-transparent rounded-lg p-4 flex items-center ${iconPosition} w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 mb-4 md:mb-6`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyles} 
    >
      <img
        src={icon}
        alt={title}
        style={iconStyles}
        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mr-4 transition-transform ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <span className="flex items-center text-center">
        <span
          className={`font-poppins text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${titleMarginClass}`}
          style={iconStyles} 
        >
          {title}
        </span>
      </span>
    </div>
  );
};

export default TrackCard;
