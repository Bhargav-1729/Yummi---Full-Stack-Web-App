import React from "react";
import { Routes, Route } from "react-router-dom";

// Public pages
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResRegister from "./pages/ResRegister";
import AdminReg from "./pages/AdminReg";

// Admin
import AdminLayout from "./components/AdminLayout";
import Admincontent from "./components/adminpages/Admincontent";
import DashboardPage from "./components/adminpages/Dashboard";
import AnalyticsPage from "./components/adminpages/AnalyticsPages";
import OrdersPage from "./components/adminpages/OrdersPage";
import UsersPage from "./components/adminpages/UsersPage";
import SettingsPage from "./components/adminpages/SettingsPage";
import RestaurantsPages from "./components/adminpages/RestaurantsPages";

// User
import UserLayout from "./components/UserLayout";
import UserMenuItems from "./components/userpages/UserMenuItems";
import UserCartPage from "./components/userpages/UserCartPage";
import UserPaymentPage from "./components/userpages/UserPaymentPage";
import UserOrderHistory from "./components/userpages/userdashboard/UserOrderHistory";
import UserActiveOrder from "./components/userpages/userdashboard/UserActiveOrder";
import UserProfile from "./components/userpages/userdashboard/UserProfile";
import OrderSuccess from "./components/userpages/OrderSuccess";
import UserResPage from "./components/userpages/UserResPage";

// Restaurant
import ResDash from "./components/ResDash";

const App = () => {
  return (
    <Routes>
      {/* ---------------- Public ---------------- */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resregister" element={<ResRegister />} />
      <Route path="/adminreg" element={<AdminReg />} />

      {/* ---------------- Admin ---------------- */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admincontent />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="restaurants" element={<RestaurantsPages />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* ---------------- Restaurant ---------------- */}
      <Route path="/restaurantdash/*" element={<ResDash />} />

      {/* ---------------- User (KEEP /userlayout) ---------------- */}
      <Route path="/userlayout/*" element={<UserLayout />} />

      {/* ---------------- Standalone User Routes ---------------- */}
      <Route path="/restaurants/:id/menu" element={<UserMenuItems />} />
      <Route path="/cart/:restaurantId" element={<UserCartPage />} />
      <Route path="/cart" element={<UserCartPage />} />
      <Route path="/payment" element={<UserPaymentPage />} />
      <Route path="/ordersuccess" element={<OrderSuccess />} />
      <Route path="/restaurants" element={<UserResPage />} />
      <Route path="/userorderhistory" element={<UserOrderHistory />} />
      <Route path="/useractiveorders" element={<UserActiveOrder />} />
      <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
  );
};

export default App;
