import React from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import "./Orders.css";

const Orders = () => {
  return (
    <>
      <div className="orders-container">
        <div className="sidebar">
          <SideBar></SideBar>
        </div>
        <div className="main-area-box">
          <div className="top-bar">
            <TopBar></TopBar>
          </div>
          <div className="main-area">
            <p>Orders Page</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
