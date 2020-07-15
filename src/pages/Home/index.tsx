import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import "./style.css";
const Home = () => {
  return (
    <div id="page-home">
      <Sidebar />
      <Header title="Dashboard" />
      <div className="content">
        <div className="widgets"></div>
        <div className="widgets"></div>
        <div className="widgets"></div>
        <div className="graph"></div>
        <div className="notifications"></div>
      </div>
    </div>
  );
};

export default Home;
