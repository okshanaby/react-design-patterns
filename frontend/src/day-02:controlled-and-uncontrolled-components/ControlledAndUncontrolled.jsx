import "./App.css";
// import AutoFocusInput from "./state-vs-ref/components/AutoFocusInput";
// import Counter from "./state-vs-ref/components/Counter";
// import CounterWithRef from "./state-vs-ref/components/CounterWithRef";
import FeedbackForm from "./with-no-pattern/FeedbackForm";

const ControlledAndUncontrolled = () => {
  return (
    <div className="app-container">
      {/* <Counter />
      <AutoFocusInput />
      <CounterWithRef /> */}
      <FeedbackForm />
    </div>
  );
};

export default ControlledAndUncontrolled;
