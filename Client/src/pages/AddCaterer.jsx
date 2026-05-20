import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCaterer } from "../services/catereringService";

const AddCaterer = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    pricePerPlate: "",
    cuisines: "",
    rating: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCaterer,

    onSuccess: () => {
      alert("Caterer Added Successfully");

      queryClient.invalidateQueries({
        queryKey: ["caterers"],
      });

      setFormData({
        name: "",
        location: "",
        pricePerPlate: "",
        cuisines: "",
        rating: "",
      });
    },

    onError: () => {
      alert("Something went wrong");
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const catererData = {
      ...formData,

      pricePerPlate: Number(formData.pricePerPlate),

      rating: Number(formData.rating),

      cuisines: formData.cuisines.split(",").map((item) => item.trim()),
    };

    mutation.mutate(catererData);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Caterer</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          name="pricePerPlate"
          placeholder="Price Per Plate"
          value={formData.pricePerPlate}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="cuisines"
          placeholder="Indian, Chinese"
          value={formData.cuisines}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Add Caterer
        </button>
      </form>
    </div>
  );
};

export default AddCaterer;
