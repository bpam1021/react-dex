export interface ParamsProps {
  pokeName: string;
}

export interface AbilitiesArray {
  ability: {
    name: string;
  };
}

export interface PokeTypesProps {
  type: {
    name: string;
  };
}

export interface StatsArray {
  base_stat: number;
  stat: {
    name: string;
  };
}
