import React from "react";
import { useState } from "react";
import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import ChatAreaSearch from "/src/Admin-dashboard/assets/ChatBarImg/ChatAreaSearch.svg";
import ChatDecoration from "/src/Admin-dashboard/assets/ChatBarImg/ChatDecoration.svg";
import Payment from "/src/Admin-dashboard/assets/ChatBarImg/Payment.svg";
import Search from "/src/Admin-dashboard/assets/ChatBarImg/Search.svg";
import UserIcon from "/src/Admin-dashboard/assets/ChatBarImg/UserIcon.svg";
import Send from "/src/Admin-dashboard/assets/ChatBarImg/Send.svg";

import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    setMessages([...messages, { message }]);
    e.target.reset();
  };

  const displayMessages = () => {
    return messages.map((message, index) => {
      return (
        <li className="msg" key={index}>
          {message.message}
        </li>
      );
    });
  };

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
          <div className="area-main">
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
            <div className="chat-area">
              <div className="chat-title-bar">
                <div className="chat-tags">
                  <h3 className="chat-user-name">Username 01</h3>
                  <span>Buyer</span>
                  <span>WED1234</span>
                </div>
                <div className="chat-icons">
                  <div className="chat-icon">
                    <img src={ChatAreaSearch} alt="" />
                  </div>
                  <div className="chat-icon">
                    <img src={ChatDecoration} alt="" />
                  </div>
                </div>
              </div>

              <div className="chat-message-box">
                <ul className="chat-msg">{displayMessages()}</ul>

                <form
                  className="send-msg"
                  action=""
                  onSubmit={handleSendMessage}
                >
                  <input
                    type="text"
                    name="message"
                    id=""
                    placeholder="Send your message"
                  />
                  <div className="send-msg-icons">
                    <div className="msg-icon">
                      <img src={Payment} alt="" />
                    </div>
                    <button type="submit">
                      <div className="msg-icon">
                        <img src={Send} alt="" />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
