import { useParams } from "react-router-dom";

const Booking = () => {
  const { packageId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Booking</h1>
        <p>Package ID: {packageId}</p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p>Booking form will be implemented here...</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
