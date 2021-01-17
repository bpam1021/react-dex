import React, { useState, useRef } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

import {
  AccordionWrap,
  AbilityAccordion,
  AccordionContent,
  AccordionText,
} from "./styles";

interface AccordionProps {
  name: string;
  abilityContent: string;
}

const Accordion: React.FC<AccordionProps> = ({ name, abilityContent }) => {
  const [isActivated, setActivated] = useState("");
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (): void => {
    setActivated(isActivated === "" ? "active" : "");
    setContentHeight(
      isActivated === "active" ? "0px" : `${contentRef.current?.scrollHeight}px`
    );
  };

  return (
    <AccordionWrap>
      <AbilityAccordion onClick={toggleAccordion}>
        <p>{name}</p>
        <BsFillCaretDownFill />
      </AbilityAccordion>
      <AccordionContent
        ref={contentRef}
        style={{ maxHeight: `${contentHeight}` }}
      >
        <AccordionText dangerouslySetInnerHTML={{ __html: abilityContent }} />
      </AccordionContent>
    </AccordionWrap>
  );
};

export default Accordion;
