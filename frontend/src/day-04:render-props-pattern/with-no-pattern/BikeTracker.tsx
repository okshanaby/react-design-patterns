import React, { useState } from "react";

const BikeTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-full h-1/2 border-2 border-red-500"
    >
      <p>
        Bike Tracker Position: {position.x}, {position.y}
      </p>
    </div>
  );
};

export default BikeTracker;
