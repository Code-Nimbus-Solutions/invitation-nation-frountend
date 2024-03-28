import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import TemplatePage from "../component/TemplatePage";
import "./Templates.css";

const Templates = () => {
  const [templateToggle, setTemplateTopple] = useState(false);

  return (
    <>
      <div className="templates-container">
        <div className="sidebar">
          <SideBar></SideBar>
        </div>
        <div className="main-area-box">
          <div className="top-bar">
            <TopBar></TopBar>
            <div className="main-area">
              <TemplatePage></TemplatePage>
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
