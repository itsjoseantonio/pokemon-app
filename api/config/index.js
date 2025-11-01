module.exports = {
  port: process.env.PORT || 3000,
  pokeApiBaseUrl: "https://pokeapi.co/api/v2",
  jwtSecret: process.env.JWT_SECRET || "your-secret-key-change-in-production",
  jwtExpiration: process.env.JWT_EXPIRATION || "24h",
  nodeEnv: process.env.NODE_ENV || "development",
};
