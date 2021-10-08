export interface ParamsProps {
  pokeName: string;
}

export interface AbilitiesArray {
  ability: {
    name: string;
    url: string;
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

export interface AbilityPropsArray {
  effect: string;
  language: {
    name: string;
  };
}
