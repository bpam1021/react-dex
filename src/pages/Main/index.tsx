import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import api from "../../service/api";

import FavoritesSideBar from "../../components/FavoritePokeSideBar";
import PokeCard from "../../components/PokeCard";

import SuprisedPikachu from "../../assets/suprised_pikachu.png";

import {
  SearchContainer,
  Content,
  NoPokesFoundMessage,
  ContentNothingMessage,
} from "./styles";

import { GetPokeArrayProps, Pokemon } from "../../interfaces/pokemon.interface";

const Main: React.FC = () => {
  const [pokeFiltered, setPokemonFiltered] = useState("");
  const [pokemonsList, setPokeList] = useState<Pokemon[]>([]);

  const getAllPokes = useCallback(async (): Promise<void> => {
    const { data } = await api.get("pokemon/?limit=151");
    const urlsArray: Array<GetPokeArrayProps> = data.results;

    const pokesObjectsArray = urlsArray.map((i) => i.url);

    const allPokesArray: Pokemon[] = await Promise.all(
      pokesObjectsArray.map(async (i) => {
        const response = await axios.get(i);

        return response.data;
      })
    );
    setPokeList(allPokesArray);
  }, []);

  useEffect(() => {
    async function getData(): Promise<void> {
      getAllPokes();
    }

    getData();
  }, [getAllPokes]);

  // eslint-disable-next-line array-callback-return
  const filteredPokes = pokemonsList.filter((poke) => {
    return poke.name.toLowerCase().includes(pokeFiltered.toLowerCase());
  });

  return (
    <>
      <SearchContainer>
        <input
          value={pokeFiltered}
          onChange={(e) => setPokemonFiltered(e.target.value)}
          placeholder="Search for a Pokémon"
        />
        <button type="button">Search</button>
      </SearchContainer>

      <FavoritesSideBar />

      {filteredPokes.length ? (
        <Content>
          {filteredPokes.map((poke) => (
            <PokeCard
              id={poke.id}
              name={poke.name}
              sprites={poke.sprites}
              key={poke.id}
              pokemon={poke}
            />
          ))}
        </Content>
      ) : (
        <ContentNothingMessage>
          <NoPokesFoundMessage>
            No Pokémon found
            <img src={SuprisedPikachu} alt="Suprised Pikachu" />
          </NoPokesFoundMessage>
        </ContentNothingMessage>
      )}
    </>
  );
};

export default Main;
