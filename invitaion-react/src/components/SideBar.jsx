import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import Overview from "../assets/SideBarImg/Overview.svg";
import Chat from "../assets/SideBarImg/Chat.svg";
import Orders from "../assets/SideBarImg/Orders.svg";
import Settings from "../assets/SideBarImg/Settings.svg";
import Templates from "../assets/SideBarImg/Templates.svg";
import Users from "../assets/SideBarImg/Users.svg";
import LiveTemplates from "../assets/SideBarImg/LiveTemplates.svg";
import Logout from "../assets/SideBarImg/Logout.svg";
import UserImg from "../assets/SideBarImg/UserImg.jpg";
import MoreDetails from "../assets/SideBarImg/MoreDetails.png";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="side-bar-nav">
          <h3>Invitation-nation</h3>
          <ul className="side-bar-nav-list">
            <li>
              <Link to="" className="side-bar-nav-element active">
                <img src={Overview} alt="" />
                <span>Overview</span>
              </Link>
            </li>
            <li>
              <Link to="" className="side-bar-nav-element">
                <img src={Orders} alt="" />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link to="" className="side-bar-nav-element">
                <img src={Users} alt="" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="" className="side-bar-nav-element">
                <img src={LiveTemplates} alt="" />
                <span>Live Templates</span>
              </Link>
            </li>
            <li>
              <Link to="" className="side-bar-nav-element">
                <img src={Chat} alt="" />
                <span>Chat</span>
              </Link>
            </li>
            <li>
              <Link to="" className="side-bar-nav-element">
                <img src={Templates} alt="" />
                <span>Templates</span>
              </Link>
            </li>
            <li>
              <Link to="" className="side-bar-nav-element">
                <img src={Settings} alt="" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="side-bar-user-controls">
          <div className="side-bar-logout">
            <Link to="" className="side-bar-logout-element ">
              <img src={Logout} alt="" />
              <span>Logout</span>
            </Link>
          </div>
          <div className="side-bar-user">
            <div className="side-bar-user-img">
              <img src={UserImg} alt="" />
            </div>
            <div className="side-bar-user-name">
              <h3>Admin</h3>
              <span>View profile</span>
            </div>
            <div className="side-bar-more-details">
              <img src={MoreDetails} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
