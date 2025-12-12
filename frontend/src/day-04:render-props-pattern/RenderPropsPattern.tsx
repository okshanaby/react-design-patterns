import React from "react";
import MouseTracker from "./with-pattern/MouseTracker";

const RenderPropsPattern = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10">
      {/* <CarTracker />
      <BikeTracker /> */}
      <MouseTracker
        render={(position) => (
          <div>
            Car Tracker Position: {position.x}, {position.y}
          </div>
        )}
      />
      <MouseTracker
        render={(position) => (
          <div>
            Bike Tracker Position: {position.x}, {position.y}
          </div>
        )}
      />
    </div>
  );
};

export default RenderPropsPattern;
