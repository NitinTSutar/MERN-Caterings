import { useQuery } from "@tanstack/react-query";
import { getCatererById } from "../services/catereringService";

function CatererModal({ catererId, onClose }) {
  const {
    data: caterer,
    isLoading,
  } = useQuery({
    queryKey: ["caterer", catererId],
    queryFn: () => getCatererById(catererId),
    enabled: !!catererId,
  });

  if (!catererId) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {caterer.name}
            </h2>

            <p className="mb-2">
              Location:📍 {caterer.location}
            </p>

            <p className="mb-2">
              Price: ₹{caterer.pricePerPlate} / plate
            </p>

            <p className="mb-2">
              Cuisines: {caterer.cuisines.join(", ")}
            </p>

            <p className="mb-2">
              Rating: {caterer.rating}/5
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default CatererModal;