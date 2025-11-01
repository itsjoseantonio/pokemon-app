const axios = require("axios");
const config = require("../config");

class PokeApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.pokeApiBaseUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getPokemons(offset = 0, limit = 20) {
    try {
      const response = await this.client.get("/pokemon", {
        params: { offset, limit },
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getPokemonById(id) {
    try {
      const response = await this.client.get(`/pokemon/${id}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null;
      }
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      return new Error(
        `PokeAPI Error: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      return new Error("PokeAPI Error: No response received");
    } else {
      return new Error(`PokeAPI Error: ${error.message}`);
    }
  }
}

module.exports = new PokeApiClient();
