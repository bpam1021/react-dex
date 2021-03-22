import React, { useContext, useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FavoritesPokemonsContext } from "../../context/FavoritePokemons/FavoritePokemonsContext";

import firsLetterUpper from "../../utils/firstLetterInUpper";

import {
  Content,
  PokeTag,
  PokeSprite,
  PokeName,
  PokeID,
  OpenCloseFavsButtonContent,
} from "./styled";

const FavoritesSideBar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { favoritesPokes } = useContext(FavoritesPokemonsContext);

  const toggleSideBar = (): void => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <OpenCloseFavsButtonContent
        onClick={toggleSideBar}
        isShowed={showSidebar}
      >
        <BsFillCaretRightFill />
      </OpenCloseFavsButtonContent>
      <Content isShowed={showSidebar}>
        {favoritesPokes ? (
          favoritesPokes.map((poke) => (
            <PokeTag key={poke.id}>
              <PokeSprite
                src={poke.sprites.other["official-artwork"].front_default}
              />
              <PokeName>{firsLetterUpper(poke.name)}</PokeName>
              <PokeID>{poke.id}</PokeID>
            </PokeTag>
          ))
        ) : (
          <p>Sem poke</p>
        )}
      </Content>
    </>
  );
};

export default FavoritesSideBar;
