import React, { useState } from 'react';
import '../css files/vtabs.css' // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccountDetails } from '../Vtabs files/Accountdetails';


const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="vertical-tabs-container">
      <div className="vertical-tabs">
        <div
          className={`vertical-tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
        <img src="/src/assets/Component 2.svg" alt="" className="oh" /> Contact Details 
        </div>
        <div
          className={`vertical-tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <img src="/src/assets/Component 2 (1).svg" alt="" className="oh" />Liked Templates
        </div>
        <div
          className={`vertical-tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          <img src="/src/assets/Component 2 (2).svg" alt="" className="oh" />Order History
        </div> <div
          className={`vertical-tab ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
        <img src="/src/assets/Component 2 (3).svg" alt="" className="oh" /> Report An Issue
        </div>
        <div
          className={`vertical-tab ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
         <img src="/src/assets/Component 2 (3).svg" alt="" className="oh" /> FAQ's
        </div>
        <div
          className={`vertical-tab ${activeTab === 6 ? 'active' : ''}`}
          onClick={() => handleTabClick(6)}
        >
         <img src="/src/assets/Component 2 (4).svg" alt="" className="oh" /> Help and Support
        </div>
        <div
          className={`vertical-tab ${activeTab === 7 ? 'active' : ''}`}
          onClick={() => handleTabClick(7)}
        >
         <img src="/src/assets/Component 2 (5).svg" alt="" className="oh" /> Logout
        </div>
        {/* Add more tabs as needed */}
      </div>

      <div className="tab-content">
        {/* Content for Tab 1 */}
        {activeTab === 1 && <AccountDetails/>}

        {/* Content for Tab 2 */}
        {activeTab === 2 && <p>Content for Tab 2 goes here.</p>}
        {activeTab === 3 && <p>Content for Tab 3 goes here.</p>}
        {activeTab === 4 && <p>Content for Tab 4 goes here.</p>}
        {activeTab === 5 && <p>Content for Tab 5 goes here.</p>}
        {activeTab === 6 && <p>Content for Tab 6 goes here.</p>}
        {activeTab === 7 && <p>Content for Tab 7 goes here.</p>}
        {/* Add more content sections as needed*/}
      </div>
      <div className="contenttxt">

      </div>
    </div>
  );
};

export default VerticalTabs;
