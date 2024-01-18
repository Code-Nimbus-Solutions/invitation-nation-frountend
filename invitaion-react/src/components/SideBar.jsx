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

export const SideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="side-bar-nav">
          <h3>Invitation-nation</h3>
          <ul>
            <li>
              <Link to="">
                <img src={Overview} alt="" />
                <span>Overview</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={Orders} alt="" />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={Users} alt="" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={LiveTemplates} alt="" />
                <span>Live Templates</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={Chat} alt="" />
                <span>Chat</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={Templates} alt="" />
                <span>Templates</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={Settings} alt="" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="side-bar-user-controls">
          <div className="side-bar-logout">
            <Link to="">
              <img src={Logout} alt="" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
