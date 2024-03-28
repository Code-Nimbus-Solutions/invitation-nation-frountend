import React from "react";
import "./TopBar.css";
import DoubleArrowRight from "../assets/TopBarImg/double-arrow-right.svg";
import NotificationOn from "../assets/TopBarImg/notification-on.svg";
import Search from "../User-Dashboard/assets copy/TopBarImg/search.svg";

const TopBar = () => {
  const userJson = {
    name: "pranav",
  };

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;

  return (
    <>
      <div className="top-bar-container">
        <div className="top-bar-left-box">
          <h3 className="user-name">{userJson.name}</h3>
          <div className="left-box-img">
            <img src={DoubleArrowRight} alt="" />
          </div>
          <span className="date">{currentDate}</span>
        </div>

        <div className="top-bar-right-box">
          <div className="right-box-img">
            <img src={NotificationOn} alt="" />
          </div>
          <div className="search-bar">
            <input type="text" name="" id="" placeholder="search" />
            <div className="search-img">
              <img src={Search} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
