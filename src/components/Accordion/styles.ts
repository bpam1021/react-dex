import styled from "styled-components";
import { shade } from "polished";

export const AccordionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const AbilityAccordion = styled.button`
  border: none;
  display: flex;
  height: 100px;
  width: 70%;
  background-color: #eb7171;
  border-radius: 10px;
  margin-top: 60px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 95vw;
    flex-direction: column;
    justify-content: space-evenly;
  }

  &:hover {
    background-color: ${shade(0.05, "#eb7171")};
  }

  p {
    text-align: center;
    color: #ffff;
    font-family: "Press Start 2P", cursive;
    font-size: 30px;
    margin: 32px 0 14px;
  }

  svg {
    position: absolute;
    color: #ffff;
    right: 30%;

    @media (max-width: 768px) {
      position: unset;
    }
  }
`;

export const AccordionContent = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
  width: 67%;
  border-radius: 0 0 5px 5px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 1px;
  }
`;

export const AccordionText = styled.div`
  margin: 15px 0;
  font-family: "Press Start 2P", cursive;
  font-weight: bold;
`;
