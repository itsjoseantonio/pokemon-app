import { Link } from 'react-router';
import usePokemonData from '@/hooks/usePokemonData';
import useFilterPokemon from '@/hooks/useFilterPokemon';

import PokemonCard from '@/components/PokemonCard';
import FilterControls from '@/components/FilterControls';
import pokeball from '@/assets/pokeball.svg';

const PokemonsPage = () => {
  const { pokemonList } = usePokemonData();
  const { search, setSearch, sortBy, setSortBy, filteredPokemon } =
    useFilterPokemon({ pokemonList });

  return (
    <main className='flex flex-col min-h-screen items-center bg-primary w-full'>
      <header className='w-full bg-primary text-white flex flex-col px-4 pt-5 mb-2 gap-1'>
        <h1 className='text-2xl font-bold flex items-center gap-2'>
          <img src={pokeball} alt='' />
          <span className='text-2xl'>Pokédex</span>
        </h1>
      </header>
      <section className='w-full px-4 gap-2 relative pb-5'>
        <FilterControls
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </section>
      <section className='w-[99%] grid grid-cols-3 gap-4 px-4 py-6 bg-white rounded-md'>
        {filteredPokemon?.map((p) => (
          <PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} />
        ))}
      </section>
      <Link to='/pokemons/1'>details</Link>
    </main>
  );
};

export default PokemonsPage;
