import styled from "styled-components";

interface SideBarProps {
  isShowed: boolean;
}

export const Content = styled.div<SideBarProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: fixed;
  width: 300px;
  height: 60%;
  z-index: 1;
  overflow-y: scroll;
  visibility: ${(props) => (props.isShowed ? "hidden" : "visible")};

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
  border-top: 4px solid #c24442;
  border-right: 4px solid #c24442;
  border-bottom: 4px solid #c24442;
  border-radius: 8px;
`;

export const OpenCloseFavsButtonContent = styled.div<SideBarProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100px;
  left: ${(props) => (props.isShowed ? "0px" : "290px")};
  top: 150px;
  background-color: #c24442;
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  z-index: 1;
`;

export const PokeTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-bottom: 2px solid #ccc;
`;

export const PokeSprite = styled.img`
  height: 60px;
`;

export const PokeName = styled.p`
  font-size: 10px;
  font-family: "Press Start 2P", cursive;
`;

export const PokeID = styled.p`
  font-size: 10px;
  font-family: "Press Start 2P", cursive;
`;
