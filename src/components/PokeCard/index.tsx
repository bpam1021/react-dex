import React, { useContext, useState, useCallback } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

import { FavoritesPokemonsContext } from "../../context/FavoritePokemons/FavoritePokemonsContext";

import { LinkPoke, Pokes, PokeTypes } from "./styled";
import { Pokemon } from "../../interfaces/pokemon.interface";
import firstLetterInUpper from "../../utils/firstLetterInUpper";

interface PokeCardProps {
  pokemon: Pokemon;
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

const PokeCards: React.FC<PokeCardProps> = ({ id, name, sprites, pokemon }) => {
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
      <LinkPoke to={`/pokeInfo/${pokemon.name}`}>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
        <div>
          <strong>{firstLetterInUpper(pokemon.name)}</strong>
          <small>{`#${pokemon.id}`}</small>
          {pokemon.types.map((type, i) => (
            <PokeTypes key={i} pokeType={type.type.name}>
              {type.type.name.toUpperCase()}
            </PokeTypes>
          ))}
        </div>
      </LinkPoke>
    </Pokes>
  );
};

export default PokeCards;
