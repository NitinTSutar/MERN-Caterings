import Caterer from "../models/Caterer.js";
import mongoose from "mongoose";

//Get all caterers

export const getAllCaterers = async (req, res) => {
  try {
    const caterers = await Caterer.find();

    res.status(200).json(caterers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get caterer by Id

export const getCatererById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check valid Mongo ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid caterer ID",
      });
    }

    const caterer = await Caterer.findById(id);

    if (!caterer) {
      return res.status(404).json({
        message: "Caterers not found",
      });
    }

    res.status(200).json(caterer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST caterer
export const createCaterer = async (req, res) => {
  try {
    const { name, location, pricePerPlate, cuisines, rating } = req.body;

    // Validation

    if (
      !name ||
      !location ||
      !pricePerPlate ||
      !rating ||
      !Array.isArray(cuisines) ||
      cuisines.length === 0
    ) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const newCaterer = new Caterer({
      name,
      location,
      pricePerPlate,
      cuisines,
      rating,
    });

    const savedCaterer = await newCaterer.save();

    res.status(201).json(savedCaterer);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
