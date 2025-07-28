import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../store/destinationSlice";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Destinations = () => {
  const dispatch = useDispatch();
  const { destinations, isLoading } = useSelector(
    (state) => state.destinations
  );

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Destinations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={destination.image || "/placeholder.jpg"}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
