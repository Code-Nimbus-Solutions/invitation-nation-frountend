import React from "react";
import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import "./Overview.css";

const Overview = () => {
  return (
    <>
      <div className="templates-container">
        <div className="sidebar">
          <SideBar></SideBar>
        </div>
        <div className="main-area-box">
          <div className="top-bar">
            <TopBar></TopBar>
          </div>
          <div className="main-area"></div>
        </div>
      </div>
    </>
  );
};

export default Overview;
