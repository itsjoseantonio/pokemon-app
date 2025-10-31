import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import usePokemonData from '@/hooks/usePokemonData';
import useFilterPokemon from '@/hooks/useFilterPokemon';
import { Button } from '@/components/ui/button';
import pokeball from '@/assets/pokeball.svg';
import PokemonCard from '@/components/PokemonCard';
import SearchBar from '@/components/SearchBar';
import SortCard from '@/components/SortCard';
import { radioOptions } from '@/constants';

const HomePage = () => {
  const { pokemonList } = usePokemonData();
  const { search, setSearch, sortBy, setSortBy, filteredPokemon } =
    useFilterPokemon({ pokemonList });
  const [showSort, setShowSort] = useState<boolean>(false);

  return (
    <main className='flex flex-col min-h-screen items-center bg-primary w-full'>
      <header className='w-full bg-primary text-white flex flex-col px-4 pt-5 mb-2 gap-1'>
        <h1 className='text-2xl font-bold flex items-center gap-2'>
          <img src={pokeball} alt='' />
          <span className='text-2xl'>Pokédex</span>
        </h1>
      </header>
      <section className='w-full px-4 gap-2 relative pb-5'>
        <div className='flex items-center gap-2'>
          <SearchBar searchValue={search} setSearchValue={setSearch} />
          <Button
            className='rounded-full bg-white hover:bg-white hover:border-none text-primary text-lg font-bold w-10 h-10'
            onClick={() => setShowSort(!showSort)}
          >
            {sortBy === 'number' ? '#' : 'A'}
          </Button>
          {showSort && (
            <SortCard
              radioValue={sortBy}
              setRadioValue={setSortBy}
              options={radioOptions}
            />
          )}
        </div>
      </section>
      <section className='w-[99%] grid grid-cols-3 gap-4 px-4 py-6 bg-white rounded-md'>
        {filteredPokemon?.map((p) => (
          <PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
