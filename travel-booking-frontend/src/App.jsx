import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginForm from "./components/auth/LoginForm";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Test from "./pages/Test"; // Add this
import { checkAuthState } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />{" "}
            {/* Add this test route */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:state" element={<Destinations />} />
            <Route path="/package/:id" element={<PackageDetails />} />
            <Route
              path="/booking/:packageId"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
