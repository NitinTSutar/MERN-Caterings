import express from "express";

import {
  getAllCaterers,
  getCatererById,
  createCaterer,
} from "../controllers/catererControllers.js";

const router = express.Router();

router.get("/", getAllCaterers);

router.get("/:id", getCatererById);

router.post("/", createCaterer);

export default router;
