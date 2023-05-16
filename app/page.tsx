import { PokemonList } from "@/components/pokemon-list";

import { getPokemonList } from "@/services/pokemon";

export default async function Home() {
  const pokemonList = await getPokemonList(1);

  return (
    <main className="flex flex-col items-center gap-14 mt-20">
      <PokemonList pokemonList={pokemonList} />
    </main>
  );
}
