import React, { useState } from "react";
import TemplateCards from './Carddata';
import BirthdayTemplateCards from '../Tabcontent/Birthdays';
import AniversaryTemplateCards from '../Tabcontent/Aniversary';
import OndiscountTemplateCards from '../Tabcontent/Ondiscount';
import WeddingTemplateCards from '../Tabcontent/Wedding';
import HousewarmingTemplateCards from '../Tabcontent/Housewarming';
import PartyTemplateCards from '../Tabcontent/Party';
import BuisnessTemplateCards from '../Tabcontent/Buisnessevent';
import './crsl.css' 

function Tabs({ searchQuery, setSearchQuery }) {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Content for each tab
  const Tabs=["ALL", "On Discount🎉", "Weddings", "Birthdays", "House Warmings", "Parties", "Anniversary" ,"Business Events"];
  const tabContent = [
    <TemplateCards searchQuery={searchQuery}/>,
    <OndiscountTemplateCards searchQuery={searchQuery}/>,
    <WeddingTemplateCards searchQuery={searchQuery}/>,
    <BirthdayTemplateCards searchQuery={searchQuery}/>,
    <HousewarmingTemplateCards searchQuery={searchQuery}/>,
    <PartyTemplateCards searchQuery={searchQuery}/>,
    <AniversaryTemplateCards searchQuery={searchQuery} />,
    <BuisnessTemplateCards searchQuery={searchQuery}/>,
  ];

  // Filter function based on search query
  const filterTemplates = (template) => {
    return template.props.data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // State to manage dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="tabs-container">
      {/* Render dropdown in responsive mode */}
      <div className="dropdown-menu">
        <button onClick={toggleDropdown}>Select Tab</button>
        {dropdownVisible && (
          <div className="dropdown-content">
            {Tabs.map((Tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  toggleDropdown();
                }}
              >
                {Tab}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Render tabs when not in responsive mode */}
      <div className="tab-buttons">
        {Tabs.map((Tab, index) => (
          <button
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {Tab}
          </button>
        ))}
      </div>
      {/* Content for active tab */}
      <div className="tab-content">
        {/* Render filtered content based on the active tab */}
        {(tabContent[activeTab])}
      </div>
    </div>
  );
}

export default Tabs;
