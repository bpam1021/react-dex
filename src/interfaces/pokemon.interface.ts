export interface Pokemon {
  id: number;
  name: string;
  types: PokemonTypes[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokemonTypes {
  type: {
    name: string;
  };
}

export interface GetPokeArrayProps {
  name: string;
  url: string;
}
