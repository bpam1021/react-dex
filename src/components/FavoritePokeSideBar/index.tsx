import React, { useContext, useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FavoritesPokemonsContext } from "../../context/FavoritePokemons/FavoritePokemonsContext";

import firsLetterUpper from "../../utils/firstLetterInUpper";

import ConfusedPsyduck from "../../assets/confused_psyduck.png";

import {
  Content,
  PokeTag,
  PokeSprite,
  PokeName,
  PokeID,
  OpenCloseFavsButtonContent,
  NoFavoritePokemonsContent,
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
        {favoritesPokes.length ? (
          favoritesPokes.map((poke) => (
            <PokeTag key={poke.id}>
              <PokeSprite
                src={poke.sprites.other["official-artwork"].front_default}
              />
              <PokeName>{firsLetterUpper(poke.name)}</PokeName>
              <PokeID>{`#${poke.id}`}</PokeID>
            </PokeTag>
          ))
        ) : (
          <NoFavoritePokemonsContent>
            <p>No Favorite Pokémon</p>
            <img src={ConfusedPsyduck} alt="confused psyduck" />
          </NoFavoritePokemonsContent>
        )}
      </Content>
    </>
  );
};

export default FavoritesSideBar;
