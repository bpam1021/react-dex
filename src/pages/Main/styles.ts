import styled from "styled-components";
import { shade } from "polished";

interface TypesVariation {
  [index: string]: string;
}

const typesVariation: TypesVariation = {
  grass: "#8dd25b",
  rock: "#b89e34",
  fire: "#e57b3c",
  ground: "#dad388",
  ghost: "#6c5681",
  water: "#7586f1",
  dark: "#413026",
  psychic: "#ec4781",
  flying: "#667bd9",
  steel: "#b3b3c2",
  poison: "#914493",
  electric: "#fcbb17",
  fairy: "#f3aff3",
  normal: "#7586f1",
};

interface PokeTypesProps {
  pokeType: string;
}

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  input {
    border: 0;
    border-radius: 6px;
    background: #fff;
    width: 400px;
    height: 40px;
    text-align: center;
  }

  button {
    border: 0;
    border-radius: 5px;
    margin-left: 10px;
    width: 120px;
    height: 40px;
    background: #ef5350;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, "#ef5350")};
    }
  }
`;

export const Content = styled.div`
  border-top: 1px solid ${shade(0.2, "#ffe5b5")};
  margin: 30px auto 0 auto;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
`;

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
  border: 2px #ccc solid;

  img {
    width: 120px;
    height: 120px;
    display: block;
    margin: auto;
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
