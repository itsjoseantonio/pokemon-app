import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PokemonCard from '../PokemonCard';

describe('PokemonCard Component', () => {
  it('Render with correct props', () => {
    const pokemonProps = {
      id: 1,
      name: 'Bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    };

    render(<PokemonCard {...pokemonProps} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', pokemonProps.image);
    expect(screen.getByText(pokemonProps.name)).toBeInTheDocument();
    expect(screen.getByText(pokemonProps.id)).toBeInTheDocument();
  });
});
