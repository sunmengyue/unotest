import React from "react";
import Navbar from "./Navbar";
import "../style/MainScreen.css";
import Dashboard from "./Dashboard";

const MainScreen = () => {
  return (
    <div className="MainScreen">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default MainScreen;
