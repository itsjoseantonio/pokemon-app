const pokeApiClient = require("../api/pokeapi.client");

class PokemonService {
  async getPokemons(offset = 0, limit = 20) {
    const response = await pokeApiClient.getPokemons(offset, limit);

    const pokemonDetailsPromises = response.results.map(async (pokemon) => {
      const id = this.extractIdFromUrl(pokemon.url);
      try {
        const details = await pokeApiClient.getPokemonById(id);
        return {
          id: `#00${id}`,
          name: pokemon.name,
          url: pokemon.url,
          image: details.sprites.front_default,
          types: details.types.map((type) => type.type.name),
        };
      } catch (error) {
        return {
          id,
          name: pokemon.name,
          url: pokemon.url,
          image: null,
          types: [],
        };
      }
    });

    const pokemonWithImages = await Promise.all(pokemonDetailsPromises);

    return {
      count: response.count,
      next: response.next,
      previous: response.previous,
      results: pokemonWithImages,
    };
  }

  async getPokemonById(id) {
    const pokemon = await pokeApiClient.getPokemonById(id);

    if (!pokemon) {
      return null;
    }

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      sprites: {
        front_default: pokemon.sprites.front_default,
        front_shiny: pokemon.sprites.front_shiny,
        back_default: pokemon.sprites.back_default,
        back_shiny: pokemon.sprites.back_shiny,
        other: pokemon.sprites.other,
      },
      types: pokemon.types.map((type) => ({
        slot: type.slot,
        type: {
          name: type.type.name,
          url: type.type.url,
        },
      })),
      abilities: pokemon.abilities.map((ability) => ({
        is_hidden: ability.is_hidden,
        slot: ability.slot,
        ability: {
          name: ability.ability.name,
          url: ability.ability.url,
        },
      })),
      stats: pokemon.stats.map((stat) => ({
        base_stat: stat.base_stat,
        effort: stat.effort,
        stat: {
          name: stat.stat.name,
          url: stat.stat.url,
        },
      })),
      moves: pokemon.moves.slice(0, 10).map((move) => ({
        move: {
          name: move.move.name,
          url: move.move.url,
        },
      })),
    };
  }

  extractIdFromUrl(url) {
    const matches = url.match(/\/(\d+)\//);
    return matches ? parseInt(matches[1]) : null;
  }
}

module.exports = new PokemonService();
