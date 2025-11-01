import { Link, useParams } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import usePokemonById from '@/hooks/usePokemonById';

const bulbasaurData = {
  name: 'Bulbasaur',
  number: '#001',
  weight: '6,9 kg',
  height: '0,7 m',
  moves: 'Chlorophyll Overgrow',
  description:
    'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
  types: [
    { name: 'Grass', color: 'bg-green-500', text: 'text-white' },
    { name: 'Poison', color: 'bg-purple-500', text: 'text-white' },
  ],
  baseStats: [
    { name: 'HP', value: 45, max: 255, color: 'bg-green-700' },
    { name: 'ATK', value: 49, max: 255, color: 'bg-green-700' },
    { name: 'DEF', value: 49, max: 255, color: 'bg-green-700' },
    { name: 'SATK', value: 65, max: 255, color: 'bg-lime-700' },
    { name: 'SDEF', value: 65, max: 255, color: 'bg-lime-700' },
    { name: 'SPD', value: 45, max: 255, color: 'bg-green-700' },
  ],
};

const StatBar = ({ name, value, max, color }) => {
  const percent = Math.min(100, (value / max) * 100);

  return (
    <div className='flex items-center gap-4 text-sm'>
      <span className='w-12 font-bold text-right text-green-700 dark:text-green-300'>
        {name}
      </span>
      <div className='flex-1 h-2 bg-gray-200 rounded-full dark:bg-gray-700'>
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

const BaseStats = ({ stats }) => (
  <div className='p-4'>
    <h3 className='mb-4 text-lg font-bold text-center text-green-700 dark:text-green-400'>
      Base Stats
    </h3>
    <div className='space-y-2'>
      {stats.map((stat) => (
        <StatBar key={stat.name} {...stat} max={stat.max} />
      ))}
    </div>
  </div>
);

const AboutSection = ({ data }) => (
  <div className='flex justify-around p-4 text-center text-sm'>
    <div className='flex flex-col items-center'>
      <div className='flex items-center'>
        <span className='text-xl'>⚖️</span>
        <span className='ml-1 font-medium'>{data.weight}</span>
      </div>
      <span className='text-xs text-gray-500'>Weight</span>
    </div>
    <div className='h-10 border-r border-gray-300 dark:border-gray-600'></div>
    <div className='flex flex-col items-center'>
      <div className='flex items-center'>
        <span className='text-xl'>📏</span>
        <span className='ml-1 font-medium'>{data.height}</span>
      </div>
      <span className='text-xs text-gray-500'>Height</span>
    </div>
    <div className='h-10 border-r border-gray-300 dark:border-gray-600'></div>{' '}
    <div className='flex flex-col items-center'>
      <div className='font-medium text-center'>{data.moves}</div>
      <span className='text-xs text-gray-500'>Moves</span>
    </div>
  </div>
);

const PokemonDetailPage = () => {
  const { id } = useParams();
  const { pokemonData } = usePokemonById(id!);
  const { types, description, baseStats } = bulbasaurData;

  return (
    <div className={`min-h-screen mx-auto w-full bg-green-500`}>
      <div className={`p-4 text-white`}>
        <header className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2'>
            <Link to={-1}>Back</Link>
            <h1 className='text-2xl font-bold'>{pokemonData?.name}</h1>
          </div>
          <span className='text-md font-bold'>{`#00${pokemonData?.id}`}</span>
        </header>

        <div className='relative flex justify-center py-4'>
          <div className='z-10 -mb-16 w-[150px] h-[150px] flex items-center justify-center'>
            <img src='' alt='' />
          </div>
          <span className='absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 opacity-70 cursor-pointer'>
            ≤
          </span>
        </div>
      </div>

      <Card className='rounded-md shadow-xl border-t-0 pt-16 w-[98%] mx-auto'>
        <CardContent className='p-0'>
          <div className='flex justify-center gap-2 py-4'>
            {types.map((type) => (
              <Badge
                key={type.name}
                className={`text-sm py-1 px-3 font-medium ${type.color} ${type.text} hover:opacity-90`}
              >
                {type.name}
              </Badge>
            ))}
          </div>

          <h2 className='mb-4 text-xl font-bold text-center text-green-700 dark:text-green-400'>
            About
          </h2>
          <AboutSection data={bulbasaurData} />
          <p className='p-4 text-sm text-gray-700 dark:text-gray-300'>
            {description}
          </p>
          <BaseStats stats={baseStats} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PokemonDetailPage;
