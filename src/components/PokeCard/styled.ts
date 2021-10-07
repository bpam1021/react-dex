import { Link } from "react-router-dom";
import styled from "styled-components";
import { typesVariation } from "../../Styles/PokeTypesVariation";

interface PokeTypesProps {
  pokeType: string;
}

interface PokeTypesProps {
  pokeType: string;
}

export const Pokes = styled.div`
  cursor: pointer;
  width: 150px;
  height: 200px;
  background: #fff;
  border-radius: 7px;
  margin-top: 30px;
  flex-direction: row;
  margin-left: 30px;
  box-shadow: 10px 10px 5px #cccccc;
  border: 2px #b8b8b8 solid;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    height: auto;
  }

  svg {
    position: absolute;
    color: #ffd500;
  }

  img {
    width: 120px;
    height: 120px;
    display: block;
    margin: auto;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;

    strong {
      font-family: "Lato", sans-serif;
      margin-left: 10px;
      font-size: 20px;
    }

    small {
      margin-right: 10px;
      color: #a3a3a3;
    }
  }
`;

export const LinkPoke = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:link {
    color: #000;
  }

  &:visited {
    color: #000;
  }
  /* 
  div {
    
  } */

  @media (max-width: 768px) {
    flex-direction: row;

    /* div {

    } */
  }
`;

export const PokeTypes = styled.p<PokeTypesProps>`
  margin-top: 10px;
  font-size: 10px;
  text-align: center;
  font-weight: bold;
  display: block;
  text-align: center;
  font-family: "Press Start 2P", cursive;
  color: ${(props) => typesVariation[props.pokeType]};
`;
