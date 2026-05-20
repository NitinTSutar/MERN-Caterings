import mongoose from "mongoose"

const catererSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    pricePerPlate: {
      type: Number,
      required: true,
    },

    cuisines: {
      type: [String],
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Caterer = mongoose.model("Caterer", catererSchema);
export default Caterer;