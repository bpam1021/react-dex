export interface FavoritesPokemons {
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

export interface FavoritesPokemonsContextData {
  favoritesPokes: FavoritesPokemons[];
  addPokeToFavorite({ id, name, sprites }: FavoritesPokemons): void;
  removePokeFromFavorite({ id, name, sprites }: FavoritesPokemons): void;
}
