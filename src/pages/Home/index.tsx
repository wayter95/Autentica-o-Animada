import React from "react";
import Skeleton from "react-loading-skeleton";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import "./style.css";
const Home = () => {
  return (
    <div id="page-home">
      <Sidebar />
      <Header title="Dashboard" />
      <div className="content">
        <div className="widgets">
          <Skeleton count={1} height={200} />
        </div>
        <div className="widgets">
          <Skeleton count={1} height={200} />
        </div>
        <div className="widgets">
          <Skeleton count={1} height={200} />
        </div>
        <div className="graph">
          <Skeleton count={1} height={700} />
        </div>
        <div className="notifications">
          <Skeleton count={1} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Home;
