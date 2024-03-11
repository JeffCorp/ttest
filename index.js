const express = require("express");
const mongoose = require("mongoose");
const authMiddleware = require("./middlewares/auth");
const userRoutes = require("./routes/userRoutes");
const gameRoutes = require("./routes/gameRoutes");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/game_rating_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/game", authMiddleware, gameRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
