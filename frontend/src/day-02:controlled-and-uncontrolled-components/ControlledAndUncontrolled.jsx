import "./App.css";
import AutoFocusInput from "./state-vs-ref/components/AutoFocusInput";
import Counter from "./state-vs-ref/components/Counter";
import CounterWithRef from "./state-vs-ref/components/CounterWithRef";

const ControlledAndUncontrolled = () => {
  return (
    <div className="app-container">
      <Counter />
      <AutoFocusInput />
      <CounterWithRef />
    </div>
  );
};

export default ControlledAndUncontrolled;
