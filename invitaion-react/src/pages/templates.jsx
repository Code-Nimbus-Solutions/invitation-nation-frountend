import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Wedding from "../assets/TempaltesImg/Wedding-Ring.svg";
import Birthday from "../assets/TempaltesImg/Party.svg";
import HouseWarming from "../assets/TempaltesImg/Housing.svg";
import BusinessEvent from "../assets/TempaltesImg/Business.svg";
import Party from "../assets/TempaltesImg/Food.svg";
import Others from "../assets/TempaltesImg/Others.svg";
import "./Templates.css";

const Templates = () => {
  const cateogiesJson = {
    wed: {
      id: "wed",
      name: "Wedding",
      image: "Wedding",
      count: 1,
    },
    btd: {
      id: "btd",
      name: "Birthday",
      image: "Birthday",
      count: 2,
    },
    hsw: {
      id: "hsw",
      name: "HouseWarming",
      image: "HouseWarming",
      count: 3,
    },
    bse: {
      id: "bse",
      name: "BusinessEvent",
      image: "BusinessEvent",
      count: 4,
    },
    pty: {
      id: "pty",
      name: "Party",
      image: "Party",
      count: 5,
    },
    oth: {
      id: "oth",
      name: "Others",
      image: "Others",
      count: 6,
    },
  };

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
          <div className="main-area">
            <h2 className="page-title">Templates Page</h2>
            <div className="categories-box">
              <div className="category-element">
                <div className="category-img">
                  <img src={Wedding} alt="" />
                </div>
                <div className="category-info-box">
                  <span className="category-title">Wedding</span>
                  <span className="category-number">10</span>
                </div>
                <button className="category-button">Add</button>
              </div>
              <div className="category-element">
                <div className="category-img">
                  <img src={Wedding} alt="" />
                </div>
                <div className="category-info-box">
                  <span className="category-title">Wedding</span>
                  <span className="category-number">10</span>
                </div>
                <button className="category-button">Add</button>
              </div>
              <div className="category-element">
                <div className="category-img">
                  <img src={Wedding} alt="" />
                </div>
                <div className="category-info-box">
                  <span className="category-title">Wedding</span>
                  <span className="category-number">10</span>
                </div>
                <button className="category-button">Add</button>
              </div>
              <div className="category-element">
                <div className="category-img">
                  <img src={Wedding} alt="" />
                </div>
                <div className="category-info-box">
                  <span className="category-title">Wedding</span>
                  <span className="category-number">10</span>
                </div>
                <button className="category-button">Add</button>
              </div>
              <div className="category-element">
                <div className="category-img">
                  <img src={Wedding} alt="" />
                </div>
                <div className="category-info-box">
                  <span className="category-title">Wedding</span>
                  <span className="category-number">10</span>
                </div>
                <button className="category-button">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;

{
  /* <img src={cateogiesJson.} alt="" /> */
}
{
  /* {Object.keys(person).forEach((key) => {
                  console.log(`${key}: ${person[key]}`);
                });} */
}
