import express from "express";
import cors from "cors";
import morgan from "morgan";
import catererRoutes from "./routes/catererRoutes.js"
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

  app.use(cors());
  app.use(express.json());
app.use(morgan("dev"));


// Middleware

// Routes
app.use("/api/caterers", catererRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
