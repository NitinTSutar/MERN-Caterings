import React from "react";

const CatererCard = ({ caterer }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-bold mb-2">{caterer.name}</h2>

      <p className="text-gray-600">📍 {caterer.location}</p>

      <p className="mt-2">₹{caterer.pricePerPlate} / plate</p>

      <p className="mt-2"> {caterer.cuisines.join(", ")}</p>

      <p className="mt-2">Rating: {caterer.rating}/5</p>
    </div>
  );
};

export default CatererCard;
