import "./App.css";
// import AutoFocusInput from "./state-vs-ref/components/AutoFocusInput";
// import Counter from "./state-vs-ref/components/Counter";
// import CounterWithRef from "./state-vs-ref/components/CounterWithRef";
// import FeedbackForm from "./with-no-pattern/FeedbackForm";
import ControlledFeedbackForm from "./with-controlled-pattern/ControlledFeedbackForm";

const ControlledAndUncontrolled = () => {
  return (
    <div className="app-container">
      {/* <Counter />
      <AutoFocusInput />
      <CounterWithRef /> */}
      {/* <FeedbackForm /> */}
      <ControlledFeedbackForm />
    </div>
  );
};

export default ControlledAndUncontrolled;
