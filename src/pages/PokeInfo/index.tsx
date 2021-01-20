import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";

import firstLetterInUpper from "../../utils/firstLetterInUpper";
import api from "../../service/api";

import AbilityAccordion from "../../components/Accordion";

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
  height: number;
  weight: number;
  abilities: AbilitiesArray[];
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

interface AbilityProps {
  name: string;
  effectEntry: string;
}

const PokeInfo: React.FC = () => {
  const { params } = useRouteMatch<ParamsProps>();
  const { pokeName } = params;
  const history = useHistory();
  const [pokeAttribute, setPokeAttribute] = useState<PokeProps>();
  const [pokeSkill, setPokeSkill] = useState<AbilityProps[]>([]);
  const [pokeSkillURL, setPokeSkillURL] = useState<AbilitiesArray[]>([]);

  useEffect(() => {
    async function getPokeData(): Promise<void> {
      const { data } = await api.get<PokeProps>(`pokemon/${pokeName}`);
      setPokeAttribute(data);
      setPokeSkillURL(data.abilities);
    }
    getPokeData();
  }, [pokeName]);

  useEffect(() => {
    async function getAbility(): Promise<void> {
      const skillsArray = pokeSkillURL.map((i) => i.ability.url);

      const allSkills = await Promise.all(
        skillsArray.map(async (s) => {
          const { data } = await axios.get(s);

          return data;
        })
      );

      const e = allSkills.map((skill) => {
        return {
          name: skill.names.find((entry: any) => entry.language.name === "en")
            .name,
          effectEntry: skill.effect_entries.find(
            (entry: any) => entry.language.name === "en"
          ).effect,
        };
      });

      setPokeSkill(e);
    }

    getAbility();
  }, [pokeAttribute, pokeSkillURL]);

  return (
    <Container>
      <BsArrowLeft
        size={40}
        onClick={() => {
          history.push("/");
        }}
      />
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
      {pokeSkill && (
        <PokeAbilities>
          {pokeSkill.map((ability, i) => (
            <AbilityAccordion
              key={i}
              name={firstLetterInUpper(ability.name.replace("-", " "))}
              abilityContent={ability.effectEntry}
            />
          ))}
        </PokeAbilities>
      )}
    </Container>
  );
};

export default PokeInfo;
