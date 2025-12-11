import React, { useRef, useState } from "react";

const CounterWithRef = () => {
  const counterRef = useRef<number>(0); // persist on re-render
  const [renderCount, setRenderCount] = useState(0);

  console.log("Hello from CounterWithRef");

  const incrementCount = () => {
    counterRef.current = counterRef.current + 1;
    console.log("counterRef", counterRef.current);
  };

  const forceReRender = () => {
    setRenderCount(renderCount + 1);
  };

  return (
    <div>
      <div className="flex justify-around w-full">
        <div>
          <h2 className="text-2xl">Ref Count: {counterRef.current}</h2>
          <button
            className="bg-purple-500 text-white p-1 rounded"
            onClick={incrementCount}
          >
            Increment Ref Count
          </button>
        </div>

        <div>
          <h2 className="text-2xl">Render Count: {renderCount}</h2>
          <button
            className="bg-purple-500 text-white p-1 rounded"
            onClick={forceReRender}
          >
            Force Re-render
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterWithRef;
