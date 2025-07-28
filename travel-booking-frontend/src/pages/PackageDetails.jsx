import { useParams } from "react-router-dom";

const PackageDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Package Details</h1>
        <p>Package ID: {id}</p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p>Package details will be implemented here...</p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
