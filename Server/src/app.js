const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "MERN Caterings API" });
});

app.use("/api/health", healthRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
