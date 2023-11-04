import React from "react";
import { Transition } from "react-transition-group";
import "./accordion.css";
interface AccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div
        className={`accordion-header ${isOpen ? "openheader" : ""}`}
        onClick={onToggle}
      >
        <h6 className="Accordiontitle">Accordion {title}</h6>
      </div>
      <Transition in={isOpen} timeout={10} unmountOnExit>
        {(state: string) => (
          <div
            className={`accordion-content accordion-${state}`}
            style={{ height: isOpen ? "fitcontent" : "0" }}
          >
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Accordion;
