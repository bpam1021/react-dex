import React, { useState, FormEvent, useEffect, useCallback } from "react";
import axios from "axios";
import api from "../../service/api";

import { Form, Content, Pokes, PokeTypes, Error, LinkPoke } from "./styles";

interface PokemonTypes {
  type: {
    name: string;
  };
}

interface Pokemon {
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

interface GetPokeArrayProps {
  name: string;
  url: string;
}

const Main: React.FC = () => {
  const [newPoke, setPokemon] = useState("");
  const [newError, setNewError] = useState("");
  const [loading, setLoading] = useState(false);
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

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newPoke) {
      setNewError("Digite o nome do Pokémon com letras minúsculas");
      return;
    }

    try {
      setLoading(true);
      // const newPokeTreated = newPoke.charAt(0).toLowerCase() + newPoke.slice(1);
      // const response = await api.get<Pokemon>(`pokemon/${newPokeTreated}`);
      setLoading(false);

      // const pokeInfo = response.data;

      setNewError("");
      setPokemon("");
    } catch (e) {
      setNewError("Erro na busca do Pokémon citado");
      setLoading(false);
    }
  }

  return (
    <>
      <Form hasError={!!newError} onSubmit={handleSubmit}>
        <input
          value={newPoke}
          onChange={(e) => setPokemon(e.target.value)}
          placeholder="Digite o nome do Pokémon"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Carregando" : "Procurar"}
        </button>

        {newError && !loading && <Error>{newError}</Error>}
      </Form>

      <Content>
        {pokemonsList.map((poke) => (
          <LinkPoke key={poke.id} to={`/pokeInfo/${poke.name}`}>
            <Pokes>
              <img
                src={poke.sprites.other["official-artwork"].front_default}
                alt={poke.name}
              />
              <div>
                <strong>
                  {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                </strong>
                <small>{`#${poke.id}`}</small>
              </div>
              {poke.types.map((type, i) => (
                <PokeTypes key={i} pokeType={type.type.name}>
                  {type.type.name.toUpperCase()}
                </PokeTypes>
              ))}
            </Pokes>
          </LinkPoke>
        ))}
      </Content>
    </>
  );
};

export default Main;
