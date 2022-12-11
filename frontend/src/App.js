import React, { Component } from "react";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Hotel_Setup } from "./pages/Hotel_Setup/hotel_setup";
import TestDash from "./pages/Dashboard/testdash";
import { AuthContextProvider } from "./components/firebase/AuthContext";

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
      <Routes>
        <Route exact path="/:action" element={<Login />} />
         shadow
        <Route  path="/dashboard/:action" element = {<Dashboard/>} />
        <Route path="/dash" element={<TestDash />} />
         master
        <Route path="/setup/:action" element={<Hotel_Setup />} />
        </Routes>
        </AuthContextProvider>
    );
  }
}

export default App;
