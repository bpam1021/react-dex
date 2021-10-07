import styled, { keyframes } from "styled-components";
import { shade } from "polished";

const hide = keyframes`
to {
        opacity: 0;
    }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 90%;
  }

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

    &:disabled {
      background: #ee7e7c;
    }
  }
`;

export const Error = styled.span`
  animation: ${hide} 1s linear 2s forwards;
  visibility: visible;
  background-color: #c53030;
  width: 350px;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  box-shadow: 4px 6px 5px #9c9c9c;

  position: absolute;
  z-index: 1;
  left: 40%;
  margin-left: -60px;
  top: 7%;

  &::before {
    content: "";
    border-style: solid;
    border-color: #c53030 transparent;
    border-width: 6px 6px 0 6px;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentNothingMessage = styled.div`
  border-top: 1px solid ${shade(0.2, "#ffe5b5")};
  margin: 30px auto 0 auto;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const NoPokesFoundMessage = styled.span`
  color: #b3a07f;
  font-size: 4rem;
  font-family: "Lato", sans-serif;
  text-align: center;
  margin-top: 10px;

  img {
    height: 90px;
  }
`;
