import { Card, CardContent } from './ui/card';
import { Link } from 'react-router';

interface PokemonCardProps {
  id: string | number;
  name: string;
  image: string;
}

const PokemonCard = ({ id, name, image }: PokemonCardProps) => {
  return (
    <Link to={`/pokemons/${String(id).replace('#00', '')}`}>
      <Card className='text-center rounded-2xl shadow-md transition-all relative text-gray-dark'>
        <p className='text-sm text-gray-medium font-medium absolute top-2 right-3'>
          {id}
        </p>
        <CardContent className='flex flex-col items-center justify-center p-3'>
          <img src={image} alt={name} className='w-40 h-40 object-contain' />
          <p className='text-base'>{name}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;
