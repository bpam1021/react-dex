import styled from "styled-components";
import { shade } from "polished";

import { typesVariation } from "../../Styles/PokeTypesVariation";

interface PokeTypesProps {
  pokeType: string;
}

export const Container = styled.div`
  margin: 100px 15px;
  display: flex;
  width: 90vw;
  flex-direction: column;
  justify-content: center;
`;

export const AttributesContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const PokePortrait = styled.div`
  display: flex;
  width: 310px;
  height: 310px;
  border: 5px #c9aa71 solid;
  border-radius: 10px;
  justify-content: center;
  background-color: #ededed;

  img {
    height: 100%;
  }
`;

export const PokeAttributes = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`;

export const PokeName = styled.div`
  display: flex;
  margin-bottom: 20px;

  h1 {
    font-size: 50px;
  }

  small {
    font-size: 20px;
    color: #9c8457;
  }
`;

export const PokeTypes = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
`;

export const Types = styled.p<PokeTypesProps>`
  font-size: 20px;
  font-weight: bold;
  font-family: "Press Start 2P", cursive;
  color: ${(props) => typesVariation[props.pokeType]};
`;

export const PokeWeightHeight = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;
  margin-left: 35px;
`;

export const WeightHeight = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "Press Start 2P", cursive;
`;

export const PokePhysics = styled.div`
  display: flex;
`;

export const PokeStats = styled.div`
  margin-top: 20px;
  display: grid;

  p {
    font-family: "Press Start 2P", cursive;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const PokeAbilities = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

  &:hover {
    background-color: ${shade(0.05, "#eb7171")};
  }

  p {
    text-align: center;
    color: #ffff;
    font-family: "Press Start 2P", cursive;
    font-size: 30px;
  }

  svg {
    position: absolute;
    color: #ffff;
    right: 24%;
  }
`;
