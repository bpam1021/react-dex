import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";

import firstLetterInUpper from "../../utils/firstLetterInUpper";
import api from "../../service/api";

import {
  Container,
  PokePortrait,
  PokeAttributes,
  PokeName,
  PokeTypes,
  PokeWeightHeight,
  Types,
  WeightHeight,
  PokePhysics,
  PokeStats,
  PokeAbilities,
  AbilityAccordion,
  AttributesContent,
} from "./styles";

import {
  AbilitiesArray,
  PokeTypesProps,
  StatsArray,
  ParamsProps,
} from "./interfacesPokeInfo";

interface PokeProps {
  id: number;
  name: string;
  abilities: AbilitiesArray[];
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokeTypesProps[];
  stats: StatsArray[];
}

const PokeInfo: React.FC = () => {
  const { params } = useRouteMatch<ParamsProps>();
  const { pokeName } = params;
  const [pokeAttribute, setPokeAttribute] = useState<PokeProps>();

  useEffect(() => {
    async function getPokeData(): Promise<void> {
      const { data } = await api.get(`pokemon/${pokeName}`);
      setPokeAttribute(data);
    }
    getPokeData();
  }, [pokeName]);

  console.log(pokeAttribute);

  return (
    <Container>
      {pokeAttribute && (
        <AttributesContent>
          <PokePortrait>
            <img
              src={
                pokeAttribute.sprites.other["official-artwork"].front_default
              }
              alt={pokeAttribute.name}
            />
          </PokePortrait>
          <PokeAttributes>
            <PokeName>
              <h1>{firstLetterInUpper(pokeAttribute.name)}</h1>
              <small>{`#${pokeAttribute.id}`}</small>
            </PokeName>
            <PokePhysics>
              <PokeTypes>
                {pokeAttribute.types.map((type, i) => (
                  <Types key={i} pokeType={type.type.name}>
                    {type.type.name.toUpperCase()}
                  </Types>
                ))}
              </PokeTypes>
              <PokeWeightHeight>
                <WeightHeight>
                  Weight:
                  {pokeAttribute.weight}
                </WeightHeight>
                <WeightHeight>
                  Height:
                  {pokeAttribute.height}
                </WeightHeight>
              </PokeWeightHeight>
            </PokePhysics>
            <PokeStats>
              {pokeAttribute.stats.map((stat, i) => (
                <p key={i}>
                  {`${stat.stat.name.toUpperCase()}: ${stat.base_stat}`}
                </p>
              ))}
            </PokeStats>
          </PokeAttributes>
        </AttributesContent>
      )}
      {pokeAttribute && (
        <PokeAbilities>
          {pokeAttribute.abilities.map((ability, i) => (
            <AbilityAccordion key={i}>
              <p>
                {firstLetterInUpper(ability.ability.name.replace("-", " "))}
              </p>
              <BsFillCaretDownFill />
            </AbilityAccordion>
          ))}
        </PokeAbilities>
      )}
    </Container>
  );
};

export default PokeInfo;
