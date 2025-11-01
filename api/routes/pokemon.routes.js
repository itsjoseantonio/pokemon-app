const express = require("express");
const pokemonController = require("../controllers/pokemon.controller");
const { authenticate } = require("../middlewares/auth");

const router = express.Router();

// All pokemon routes require authentication
router.use(authenticate);

router.get("/", pokemonController.getPokemons);
router.get("/:id", pokemonController.getPokemonById);

module.exports = router;
