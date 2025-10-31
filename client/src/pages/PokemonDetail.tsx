import { useParams } from 'react-router';

const PokemonDetailPage = () => {
  const params = useParams();

  console.log(params, 'params');
  return <div>PokemonDetailPage</div>;
};

export default PokemonDetailPage;
