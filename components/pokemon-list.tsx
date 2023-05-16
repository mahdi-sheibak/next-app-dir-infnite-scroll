"use client";
import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import { PokemonCard } from "./pokemon-card";
import { Loader } from "./loader";
import { getPokemonList, Pokemon } from "@/services/pokemon";

interface PokemonListProps {
  pokemonList: Pokemon[];
}

export function PokemonList({
  pokemonList: initialPokemonList,
}: PokemonListProps) {
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const [pokemonList, setPokemonList] = useState([...initialPokemonList]);

  const fetchNewPokemonItems = useCallback(async () => {
    const newPokemonItems = await getPokemonList(page);
    setPokemonList((prevState) => [...prevState, ...newPokemonItems]);
  }, [page]);

  const fetchNextPage = async () => {
    setLoading(true);
    setPage((prevState) => prevState + 1);
    await fetchNewPokemonItems();
    setLoading(false);
  };

  return (
    <>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          key={`${pokemon.name}-${pokemon.url}-${uuid()}`}
        />
      ))}
      {!isLoading && <Loader callback={fetchNextPage} />}
    </>
  );
}
