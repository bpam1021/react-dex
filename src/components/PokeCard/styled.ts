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
  height: 236px;
  margin: 30px 0 0 30px;
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

  .poke-infos {
    align-items: center;
    border-top: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 768px) {
      align-items: baseline;
      border: 0;
      flex: 1;
    }

    .poke-number-name {
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
          margin: 10px 0 5px 10px;
        }
      }

      small {
        color: #a3a3a3;
        margin-right: 10px;
      }
    }
  }
`;

export const PokeTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
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
  padding: 11px;
  text-align: center;
  width: 100px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: 0;
    width: 90%;
  }
`;
