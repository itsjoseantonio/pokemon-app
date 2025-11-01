import { Card, CardContent } from './ui/card';

interface PokemonCardProps {
  id: string | number;
  name: string;
  image: string;
}

const PokemonCard = ({ id, name, image }: PokemonCardProps) => {
  return (
    <Card className='text-center rounded-2xl shadow-md transition-all relative text-gray-dark'>
      <p className='text-sm text-gray-medium font-medium absolute top-2 right-3'>
        {id}
      </p>
      <CardContent className='flex flex-col items-center justify-center p-3'>
        <img src={image} alt={name} className='w-20 h-20 object-contain' />
        <p className='text-base'>{name}</p>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
