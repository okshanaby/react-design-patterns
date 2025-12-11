import "./App.css";
// import AutoFocusInput from "./state-vs-ref/components/AutoFocusInput";
// import Counter from "./state-vs-ref/components/Counter";
// import CounterWithRef from "./state-vs-ref/components/CounterWithRef";
// import FeedbackForm from "./with-no-pattern/FeedbackForm";
// import ControlledFeedbackForm from "./with-controlled-pattern/ControlledFeedbackForm";
import UncontrolledFeedbackForm from "./with-uncontrolled-pattern/UncontrolledFeedbackForm";
import UncontrolledFormNoRef from "./with-uncontrolled-pattern/UncontrolledFormNoRef";

const ControlledAndUncontrolled = () => {
  return (
    <div className="app-container">
      {/* <Counter />
      <AutoFocusInput />
      <CounterWithRef /> */}
      {/* <FeedbackForm /> */}
      {/* <ControlledFeedbackForm /> */}
      <UncontrolledFeedbackForm />
      <UncontrolledFormNoRef />
    </div>
  );
};

export default ControlledAndUncontrolled;
