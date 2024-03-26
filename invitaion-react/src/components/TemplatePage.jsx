import React from "react";
import Wedding from "../assets/TempaltesImg/Wedding-Ring.svg";
import Birthday from "../assets/TempaltesImg/Party.svg";
import HouseWarming from "../assets/TempaltesImg/Housing.svg";
import BusinessEvent from "../assets/TempaltesImg/Business.svg";
import Party from "../assets/TempaltesImg/Food.svg";
import Others from "../assets/TempaltesImg/Others.svg";
import { Link } from "react-router-dom";
import "./TemplatePage.css";

const TemplatePage = () => {
  const cateogiesJson = [
    {
      id: "wed",
      name: "Wedding",
      image: Wedding,
      count: 1,
    },
    {
      id: "btd",
      name: "Birthday",
      image: Birthday,
      count: 2,
    },
    {
      id: "hsw",
      name: "HouseWarming",
      image: HouseWarming,
      count: 3,
    },
    {
      id: "bse",
      name: "BusinessEvent",
      image: BusinessEvent,
      count: 4,
    },
    {
      id: "pty",
      name: "Party",
      image: Party,
      count: 5,
    },
    {
      id: "oth",
      name: "Others",
      image: Others,
      count: 6,
    },
  ];

  return (
    <>
      <h2 className="page-title">Templates Page</h2>
      <div className="categories-box">
        {cateogiesJson.map((element) => {
          return (
            <div className="category-element" key={element.id}>
              <div className="category-img">
                <img src={element.image} alt={element.name} />
              </div>
              <div className="category-info-box">
                <span className="category-title">{element.name}</span>
                <span className="category-number">{element.count}</span>
              </div>
              <Link to={`/Category`}>
                <button className="category-button">Add</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TemplatePage;
