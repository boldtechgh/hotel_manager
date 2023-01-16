import React, { Component, useEffect } from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
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

const App = () => {
  return (
    <Routes>
      <Route exact path="/:action" element={<Login />} />
      <Route path="/frontdesk" element={<Frontdesk />} />
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
