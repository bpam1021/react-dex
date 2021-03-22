import React, { useContext } from "react";
import { IconBaseProps } from "react-icons";

import { FavoritesPokemonsContext } from "../../context/FavoritePokemons/FavoritePokemonsContext";

import { Pokes } from "./styled";

interface PokeCardProps {
  icon: React.ComponentType<IconBaseProps>;
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
  icon: Icon,
  children,
}) => {
  const { addPokeToFavorite } = useContext(FavoritesPokemonsContext);

  return (
    <Pokes>
      <Icon
        size={25}
        onClick={() => {
          addPokeToFavorite({ id, name, sprites });
        }}
      />
      {children}
    </Pokes>
  );
};

export default PokeCards;
