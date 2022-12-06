import React, { Component } from "react";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/:action" element={<Login />} />
      </Routes>
    );
  }
}

export default App;
