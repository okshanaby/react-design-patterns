import "./App.css";
import React from "react";
import Modal from "./with-no-pattern/Modal";

const CompoundComponent = () => {
  return (
    <div>
      <Modal
        title="Modal Title"
        body="Modal Body"
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
      />
    </div>
  );
};

export default CompoundComponent;
