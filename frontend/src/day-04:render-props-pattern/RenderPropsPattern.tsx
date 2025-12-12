import React from "react";
import CarTracker from "./with-no-pattern/CarTracker";
import BikeTracker from "./with-no-pattern/BikeTracker";

const RenderPropsPattern = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10">
      <CarTracker />
      <BikeTracker />
    </div>
  );
};

export default RenderPropsPattern;
