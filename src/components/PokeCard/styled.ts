import styled from "styled-components";

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
