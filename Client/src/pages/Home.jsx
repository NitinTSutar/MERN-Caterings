import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCaterers } from "../services/catereringService";
import CatererCard from "../components/CatererCard";
import CatererModal from "../components/CatererModal";

const Home = () => {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedCaterer, setSelectedCaterer] = useState(null);

  const {
    data: caterers = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["caterers"], queryFn: getCaterers });

  const filteredCaterers = caterers.filter((caterer) => {
    const matchesSearch = caterer.name
      .toLowerCase()
      .includes(search.toLowerCase());

    let matchesPrice = true;

    if (priceFilter === "low") {
      matchesPrice = caterer.pricePerPlate < 300;
    }

    if (priceFilter === "medium") {
      matchesPrice =
        caterer.pricePerPlate >= 300 && caterer.pricePerPlate <= 500;
    }

    if (priceFilter === "high") {
      matchesPrice = caterer.pricePerPlate > 500;
    }

    return matchesSearch && matchesPrice;
  });

  if (error) {
    return <h1 className="p-6 text-red-500">Something Went Wrong</h1>;
  }
  if (isLoading) return <h1 className="p-6">Loading...</h1>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Caterers</h1>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search caterers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg mb-6 w-10/12"
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border p-2 rounded-lg mb-6 w-2/12"
        >
          <option value="all">All Prices</option>
          <option value="low">Below ₹300</option>
          <option value="medium">₹300 - ₹500</option>
          <option value="high">Above ₹500</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCaterers.map((caterer) => (
          <div
            key={caterer._id}
            onClick={() => setSelectedCaterer(caterer._id)}
            className="cursor-pointer"
          >
            <CatererCard caterer={caterer} />
          </div>
        ))}
      </div>
      <CatererModal
        catererId={selectedCaterer}
        onClose={() => setSelectedCaterer(null)}
      />
    </div>
  );
};

export default Home;
