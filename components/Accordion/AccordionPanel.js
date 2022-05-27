import { useState } from "react";
import IconArrow from "../../assets/icon-arrow-up.svg";

export default function AccordionPanel({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseDown = () => setIsOpen(!isOpen);
  const handleKeyDown = (e) => (e.key === "Enter" ? setIsOpen(!isOpen) : null);

  return (
    <div
      className={`a-accordion__item ${isOpen ? "a-accordion__item--open" : ""}`}
    >
      <div
        id="accordion" // id is important for connection between aria-labelledby
        className="a-accordion__item-header"
        aria-controls="accordion_content" // identifies the element with content what is controlled by this "button"
        aria-expanded={isOpen ? true : false} // NVDA is inform with any change
        onMouseDown={handleMouseDown}
        onKeyDown={(e) => handleKeyDown(e)} // This event is for keyboard accessibility
        tabIndex={0} // for keyboard visibility focus
        role="button" // set the div as button for NVDA
      >
        <p className="a-accordion__item-text">{title}</p>
        <IconArrow className="a-accordion__item-icon" />
      </div>
      <div
        className="a-accordion__item-content"
        aria-labelledby="accordion"
        id="accordion_content"
      >
        {text}
      </div>
    </div>
  );
}
