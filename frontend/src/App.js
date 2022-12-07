import React, { Component } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from "./pages/Login/Login.jsx";
import SignUp from "./components/sign-up/sign-up.component";
import {  Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
  }
}

export default App;
