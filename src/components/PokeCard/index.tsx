import React, { useContext, useState, useCallback } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

import { FavoritesPokemonsContext } from "../../context/FavoritePokemons/FavoritePokemonsContext";

import { Pokes } from "./styled";

interface PokeCardProps {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const PokeCards: React.FC<PokeCardProps> = ({
  id,
  name,
  sprites,
  children,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addPokeToFavorite, removePokeFromFavorite } = useContext(
    FavoritesPokemonsContext
  );

  const handleSetFavoriteIcon = useCallback(() => {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      removePokeFromFavorite({ id, name, sprites });
    } else {
      addPokeToFavorite({ id, name, sprites });
    }
  }, [
    addPokeToFavorite,
    removePokeFromFavorite,
    id,
    name,
    sprites,
    isFavorite,
  ]);

  return (
    <Pokes>
      {isFavorite ? (
        <BsStarFill
          size={25}
          onClick={() => {
            handleSetFavoriteIcon();
          }}
        />
      ) : (
        <BsStar
          size={25}
          onClick={() => {
            handleSetFavoriteIcon();
          }}
        />
      )}
      {children}
    </Pokes>
  );
};

export default PokeCards;
