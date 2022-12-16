import React, { Component } from "react";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import HotelSetup from "./pages/Hotel_Setup/hotel_setup";
import { AuthContextProvider } from "./components/firebase/AuthContext";
import CheckIn from "./pages/checkin/chekin.page";

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <CheckIn />
        <Routes>
          <Route exact path="/:action" element={<Login />} />
          <Route path="/dashboard/:action" element={<Dashboard />} />
          <Route path="/setup/:action" element={<HotelSetup />} />
        </Routes>
      </AuthContextProvider>
    );
  }
}

export default App;
