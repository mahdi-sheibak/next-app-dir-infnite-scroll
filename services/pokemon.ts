export interface ServerResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export const getPokemonList = async (page: number) => {
  const pokemonListResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=6&page=${page}`
  );

  const pokemonList: ServerResponse<Pokemon> = await pokemonListResponse.json();

  return pokemonList.results;
};
