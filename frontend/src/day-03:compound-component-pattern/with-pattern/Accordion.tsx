import React, { FC, ReactNode, useState } from "react";

type AccordionProps = {
  children: ReactNode;
};

type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
};

const Accordion: FC<AccordionProps> & { Item: FC<AccordionItemProps> } = ({
  children,
}) => {
  return <div className="accordion">{children}</div>;
};

const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setIsOpen((open) => !open)}
      >
        {title}
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

// Attach subcomponents
Accordion.Item = AccordionItem;

export default Accordion;
