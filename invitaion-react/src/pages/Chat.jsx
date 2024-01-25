import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import ChatAreaSearch from "../assets/ChatBarImg/ChatAreaSearch.svg";
import ChatDecoration from "../assets/ChatBarImg/ChatDecoration.svg";
import Payment from "../assets/ChatBarImg/Payment.svg";
import Search from "../assets/ChatBarImg/Search.svg";
import UserIcon from "../assets/ChatBarImg/UserIcon.svg";

import "./Chat.css";

const Chat = () => {
  return (
    <>
      <div className="chat-container">
        <div className="sidebar">
          <SideBar></SideBar>
        </div>
        <div className="main-area-box">
          <div className="top-bar">
            <TopBar></TopBar>
          </div>
          <div className="main-area">
            <div className="chat-bar">
              <h3 className="chat-bar-title">Recent Chat</h3>
              <div className="search-bar-box">
                <div className="search-bar-logo">
                  <img src={Search} alt="" />
                </div>
                <input type="text" name="" id="" placeholder="Search" />
              </div>
              <ul className="chat-bar-filter">
                <li className="active">All</li>
                <li>Buyers</li>
                <li>Users</li>
              </ul>
              <div className="chat-bar-users-box">
                <div className="chat-bar-user">
                  <div className="chat-bar-user-img">
                    <img src={UserIcon} alt="" />
                  </div>
                  <div className="chat-bar-msg-box">
                    <span className="user-name">Pranav</span>
                    <span className="user-prev-msg">Welcome to invi..</span>
                  </div>
                  <div className="chat-bar-notification">
                    <span className="notification-no">3</span>
                  </div>
                </div>
                <div className="chat-bar-user">
                  <div className="chat-bar-user-img">
                    <img src={UserIcon} alt="" />
                  </div>
                  <div className="chat-bar-msg-box">
                    <span className="user-name">Pranav</span>
                    <span className="user-prev-msg">Welcome to invi..</span>
                  </div>
                  <div className="chat-bar-notification">
                    <span className="notification-no">3</span>
                  </div>
                </div>
                <div className="chat-bar-user">
                  <div className="chat-bar-user-img">
                    <img src={UserIcon} alt="" />
                  </div>
                  <div className="chat-bar-msg-box">
                    <span className="user-name">Pranav</span>
                    <span className="user-prev-msg">Welcome to invi..</span>
                  </div>
                  <div className="chat-bar-notification">
                    <span className="notification-no">3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-area"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
