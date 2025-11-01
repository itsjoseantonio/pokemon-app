const express = require("express");
const authRoutes = require("./auth.routes");
const pokemonRoutes = require("./pokemon.routes");

const router = express.Router();

router.use("/", authRoutes);
router.use("/pokemons", pokemonRoutes);

module.exports = router;
