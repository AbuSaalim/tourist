import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDestinations } from "../store/destinationSlice";
import LoadingSpinner from "../components/common/LoadingSpinner";
import {
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

const Home = () => {
  const dispatch = useDispatch();
  const { destinations, isLoading } = useSelector(
    (state) => state.destinations
  );

  useEffect(() => {
    dispatch(fetchDestinations({ featured: true, limit: 6 }));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-300 opacity-20 rounded-full animate-ping"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight animate-slide-up">
              Discover Incredible{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 animate-pulse">
                India
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              Explore the diverse beauty, rich culture, and amazing destinations
              across India with our carefully crafted travel experiences.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Link
                to="/destinations"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:-translate-y-1"
              >
                <span>Explore Destinations</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                to="/packages"
                className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:-translate-y-1"
              >
                <span>View Packages</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                TravelIndia
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We make your travel dreams come true with our expertly planned
              itineraries, local insights, and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <FiMapPin className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Expert Local Guides
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced local guides provide authentic insights and
                hidden gems you won't find elsewhere.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <FiCalendar className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                Flexible Itineraries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customize your journey with flexible booking options and
                personalized itineraries.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <FiUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock customer support to ensure your journey is
                smooth and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Destinations */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover the most enchanting places in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image || "/placeholder-destination.jpg"}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <FiStar className="text-yellow-400 text-xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
                  >
                    Explore
                    <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              View All Destinations
              <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
