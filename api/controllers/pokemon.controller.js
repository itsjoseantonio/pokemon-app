const pokemonService = require("../services/pokemon.service");

class PokemonController {
  async getPokemons(req, res, next) {
    try {
      const { offset = 0, limit = 20 } = req.query;

      const result = await pokemonService.getPokemons(
        parseInt(offset),
        parseInt(limit)
      );

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getPokemonById(req, res, next) {
    try {
      const { id } = req.params;

      const pokemon = await pokemonService.getPokemonById(id);

      if (!pokemon) {
        return res.status(404).json({
          success: false,
          message: "Pokemon not found",
        });
      }

      res.json({
        success: true,
        data: pokemon,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PokemonController();
