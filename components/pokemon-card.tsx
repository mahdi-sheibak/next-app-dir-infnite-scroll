interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <section className="bg-blue-900 border border-l-white p-5 rounded-lg text-center w-1/4">
      <h1 className="text-white text-4xl">{name}</h1>
    </section>
  );
}
