import React, { Component } from "react";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import HotelSetup  from "./pages/Hotel_Setup/hotel_setup";
import { AuthContextProvider } from "./components/firebase/AuthContext";

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
      <Routes>
        <Route exact path="/:action" element={<Login />} />
         shadow
        <Route  path="/dashboard/:action" element = {<Dashboard/>} />
         master
        <Route path="/setup/:action" element={<HotelSetup />} />
        </Routes>
        </AuthContextProvider>
    );
  }
}

export default App;
