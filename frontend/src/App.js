import React, { Component } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";
import SideNav from "./components/sideNav/side-nav.component";
import Dashboard from "./pages/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route exact path="/:action" element={<Login />} />
      </Routes>
    );
  }
}

export default App;
