import { Link } from "react-router-dom";
import styled from "styled-components";
import { typesVariation } from "../../Styles/PokeTypesVariation";

interface PokeTypesProps {
  pokeType: string;
}

export const Pokes = styled.div`
  background: #fff;
  border-radius: 7px;
  border: 2px #b8b8b8 solid;
  box-shadow: 10px 10px 5px #cccccc;
  cursor: pointer;
  flex-direction: row;
  height: 200px;
  margin-left: 30px;
  margin-top: 30px;
  width: 150px;

  @media (max-width: 768px) {
    height: auto;
    margin-left: 0;
    width: 100%;
  }

  svg {
    color: #ffd500;
    position: absolute;
  }
`;

export const LinkPoke = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media (max-width: 768px) {
    flex-direction: row;
  }

  &:link {
    color: #000;
  }

  &:visited {
    color: #000;
  }

  img {
    display: block;
    height: 120px;
    margin: auto;
    padding: 0;
    width: 120px;

    @media (max-width: 768px) {
      margin: 0;
      width: 40%;
    }
  }

  div {
    align-items: center;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      align-items: baseline;
      border: 0;
      flex-direction: column;
      flex: 1;
    }

    div {
      @media (max-width: 768px) {
        align-items: center;
        display: flex;
        flex-direction: row;
      }
      strong {
        font-family: "Lato", sans-serif;
        font-size: 20px;
        margin-left: 10px;

        @media (max-width: 768px) {
          margin: 0;
        }
      }

      small {
        color: #a3a3a3;
        margin-right: 10px;
      }
    }
  }
`;

export const PokeTypes = styled.span<PokeTypesProps>`
  align-items: center;
  background-color: ${(props) => typesVariation[props.pokeType]};
  border-radius: 8px;
  color: #ffff;
  display: flex;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  width: 70px;

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 10px;
    width: 90%;
  }
`;
