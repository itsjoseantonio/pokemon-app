require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT, "PORT");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", routes);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Pokemon API running on port ${PORT}`);
});
