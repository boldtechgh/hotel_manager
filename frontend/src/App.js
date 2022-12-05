import React, { Component } from "react";
import "./App.scss";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./components/sign-up/sign-up.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
  }
}

export default App;
