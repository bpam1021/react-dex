import React, { createContext, useCallback, useState, useEffect } from "react";

import {
  FavoritesPokemonsContextData,
  FavoritesPokemons,
} from "./FavoritePokemonsInterface";

export const FavoritesPokemonsContext = createContext<
  FavoritesPokemonsContextData
>({} as FavoritesPokemonsContextData);

export const FavoritesPokemonsProvider: React.FC = ({ children }) => {
  const [favoritePokemons, setFavoritesPokemons] = useState<
    FavoritesPokemons[]
  >(() => {
    const localStoragedPokes = localStorage.getItem("FavoritePokemons");

    if (localStoragedPokes) {
      return JSON.parse(localStoragedPokes);
    }

    return [];
  });

  const addPokeToFavorite = useCallback(
    (poke: FavoritesPokemons) => {
      setFavoritesPokemons([...favoritePokemons, poke]);
    },
    [favoritePokemons]
  );

  useEffect(() => {
    localStorage.setItem("FavoritePokemons", JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <FavoritesPokemonsContext.Provider
      value={{ favoritesPokes: favoritePokemons, addPokeToFavorite }}
    >
      {children}
    </FavoritesPokemonsContext.Provider>
  );
};
