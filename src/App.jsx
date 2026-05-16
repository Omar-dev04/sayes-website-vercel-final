import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Termsandconditions from './Components/Termsandconditions.jsx';
import Features from './Components/Features.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Dashboard from './Components/Dashboard.jsx';
import ParkingOccupancy from "./Components/ParkingOccupancy.jsx";
import VehicleTypes from "./Components/VehicleTypes.jsx";
import RecentEventsPage from "./Components/RecentEventsPage.jsx";
import Overview from './Components/Overview.jsx';
import RatingCardPage from './Components/RatingCardPage.jsx';

function Layout({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
}

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'termsandconditions', element: <Termsandconditions /> },
        { path: 'features', element: <Features /> },
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <Navigate to="overview" replace /> },
            { path: 'overview', element: <Overview /> },
            { path: 'parking-occupancy', element: <ParkingOccupancy /> },
            { path: 'vehicle-types', element: <VehicleTypes /> },
            { path: 'recent-events', element: <RecentEventsPage /> },
            { path: 'rating-Card', element: <RatingCardPage /> },
          ],
        },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}