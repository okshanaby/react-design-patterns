import React from "react";
import MouseTrackerWithChildren from "./with-pattern/MouseTrackerWithChildren";

const RenderPropsPattern = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10">
      {/* <CarTracker />
      <BikeTracker /> */}
      {/* <MouseTracker
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
      /> */}
      <MouseTrackerWithChildren>
        {() => <div>Car Tracker Position:</div>}
      </MouseTrackerWithChildren>
      <MouseTrackerWithChildren>
        {(position) => (
          <div>
            Bike Tracker Position: {position?.x}, {position?.y}
          </div>
        )}
      </MouseTrackerWithChildren>
    </div>
  );
};

export default RenderPropsPattern;
