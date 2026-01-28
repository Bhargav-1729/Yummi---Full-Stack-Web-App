import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import UserHomePage from "./userpages/UserHomePage";
import UserResPage from "./userpages/UserResPage";
import { RenderUserRest } from "../services/api";

const UserLayout = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await RenderUserRest();
        setRestaurants(response.data);
      } catch (err) {
        setError("Failed to load restaurants");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="user-layout">
      <UserNavBar />

      <Routes>
        <Route
          index
          element={<UserHomePage restaurants={restaurants} />}
        />
        <Route
          path="restaurants"
          element={<UserResPage restaurants={restaurants} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default UserLayout;
