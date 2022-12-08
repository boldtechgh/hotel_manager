import React, { Component } from "react";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Hotel_Setup } from "./pages/Hotel_Setup/hotel_setup";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/:action" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setup/:action" element={<Hotel_Setup />} />
      </Routes>
    );
  }
}

export default App;
