import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/dashboard/dashboard.component";
import Login from "./pages/Login/Login.jsx";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/">
          <Route path="" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
