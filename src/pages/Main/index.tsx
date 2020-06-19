import React, { useState, FormEvent, useEffect } from "react";

import api from "../../service/api";

import { Form, Content, Pokes, PokeTypes } from "./styles";

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
    front_default: string;
  };
}

const Main: React.FC = () => {
  const [newPoke, setPokemon] = useState("");
  const [pokemonsList, setPokeList] = useState<Pokemon[]>(() => {
    const savedPokes = localStorage.getItem("PokeApi - React");

    if (savedPokes) {
      return JSON.parse(savedPokes);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("PokeApi - React", JSON.stringify(pokemonsList));
  }, [pokemonsList]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.get<Pokemon>(`pokemon/${newPoke}`);

      const pokeInfo = response.data;

      setPokeList([...pokemonsList, pokeInfo]);
      setPokemon("");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          value={newPoke}
          onChange={(e) => setPokemon(e.target.value)}
          placeholder="Digite o nome do Pokémon"
        />
        <button type="submit">Procurar</button>
      </Form>

      <Content>
        {pokemonsList.map((poke) => (
          <Pokes key={poke.id}>
            <img src={poke.sprites.front_default} alt={poke.name} />
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
        ))}
      </Content>
    </>
  );
};

export default Main;
