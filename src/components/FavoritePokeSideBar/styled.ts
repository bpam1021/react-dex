import styled from "styled-components";

interface SideBarProps {
  isShowed: boolean;
}

export const Content = styled.div<SideBarProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 60%;
  overflow-y: scroll;
  position: fixed;
  visibility: ${(props) => (!props.isShowed ? "hidden" : "visible")};
  width: 300px;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  background-color: #ffff;
  border-bottom: 4px solid #c24442;
  border-radius: 8px;
  border-right: 4px solid #c24442;
  border-top: 4px solid #c24442;
`;

export const NoFavoritePokemonsContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  p {
    color: #b3a07f;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    margin-right: 5px;
  }

  img {
    height: 60px;
  }
`;

export const OpenCloseFavsButtonContent = styled.div<SideBarProps>`
  align-items: center;
  background-color: #c24442;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  cursor: pointer;
  display: flex;
  height: 100px;
  justify-content: center;
  left: ${(props) => (!props.isShowed ? "0px" : "290px")};
  position: fixed;
  top: 150px;
  width: 40px;
  z-index: 1;
`;

export const PokeTag = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  border-bottom: 2px solid #ccc;
`;

export const PokeSprite = styled.img`
  height: 60px;
`;

export const PokeName = styled.p`
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
`;

export const PokeID = styled.p`
  color: #cccc;
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
`;
