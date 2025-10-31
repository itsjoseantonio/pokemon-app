import { useState } from 'react';
import { useAuth } from '@/store/auth';
import { Button } from '@/components/ui/button';
import pokeball from '@/assets/pokeball.svg';
import PokemonCard from '@/components/PokemonCard';
import SearchBar from '@/components/SearchBar';
import SortCard from '@/components/SortCard';

const HomePage = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState<string>('');
  const [showSort, setShowSort] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('number');

  const radioOptions = [
    {
      id: 'number',
      value: 'number',
      label: 'Number',
    },
    {
      id: 'name',
      value: 'name',
      label: 'Name',
    },
  ];

  const pokemons = [
    { id: '#001', name: 'Bulbasaur', image: '/assets/bulbasaur.png' },
    { id: '#004', name: 'Charmander', image: '/assets/charmander.png' },
    { id: '#007', name: 'Squirtle', image: '/assets/squirtle.png' },
    { id: '#012', name: 'Butterfree', image: '/assets/butterfree.png' },
    { id: '#025', name: 'Pikachu', image: '/assets/pikachu.png' },
    { id: '#092', name: 'Gastly', image: '/assets/gastly.png' },
    { id: '#132', name: 'Ditto', image: '/assets/ditto.png' },
    { id: '#152', name: 'Mew', image: '/assets/mew.png' },
    { id: '#304', name: 'Aron', image: '/assets/aron.png' },
  ];

  const filtered = pokemons.filter((p) => {
    if (sortBy === 'name') {
      return p.name.toLowerCase().includes(search.toLowerCase());
    }
    return p.id.toLowerCase().includes(search.toLowerCase());
  });

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
        {filtered.map((p) => (
          <PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
