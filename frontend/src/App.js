import React from "react";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import HotelSetup from "./pages/Hotel_Setup/hotel_setup";
import CheckIn from "./pages/checkin/chekin.page";
import Bookings from "./pages/bookings";
import RoomType from "./pages/rooms/roomtypes";
import Rooms from "./pages/rooms";
import Hotels from "./pages/Hotels";
import Staff from "./pages/Staff";
import Frontdesk from "./pages/Frontdesk/Frontdesk";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route exact path="/:action" element={<Login />} />
      <Route path="/frontdesk" element={<Frontdesk />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/setup/:action" element={<HotelSetup />} />
      <Route path="/checkin" element={<CheckIn />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/room-type" element={<RoomType />} />
      <Route path="/room-list" element={<Rooms />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/staff" element={<Staff />} />
    </Routes>
  );
};

export default App;
