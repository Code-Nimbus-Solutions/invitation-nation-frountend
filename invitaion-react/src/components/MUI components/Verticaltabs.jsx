import React, { useState } from 'react';
import '../css_files/vtabs.css' // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccountDetails } from '../Vtabs files/Accountdetails';
import { Link } from 'react-router-dom';
import contact from "/src/assets/Component 2.svg"
import likedtemplate from "/src/assets/Component 2 (1).svg"
import order from "/src/assets/Component 2 (2).svg"
import report from "/src/assets/Component 2 (3).svg"
import faq from "/src/assets/Component 2 (3).svg"
import help from "/src/assets/Component 2 (4).svg"
import logout from "/src/assets/Component 2 (5).svg"


const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="vertical-tabs-container">
      <div className="vertical-tabs">
        <a href='#activecontent' className="conct" style={{textDecoration:"none",scrollBehavior:"smooth"}}><div
          className={`vertical-tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
        <img src={contact} alt="" className="oh" /> Contact Details 
        </div></a>
        <div
          className={`vertical-tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <img src={likedtemplate} alt="" className="oh" />Liked Templates
        </div>
        <div
          className={`vertical-tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          <img src={order} alt="" className="oh" />Order History
        </div> 
        <Link to='/help' style={{textDecoration:"none"}}><div
          className={`vertical-tab ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
        <img src={report} alt="" className="oh" /> Report An Issue
        </div></Link>
        <div
          className={`vertical-tab ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
         <img src={faq} alt="" className="oh" /> FAQ's
        </div>
        <Link to='/help' style={{textDecoration:"none"}}><div
          className={`vertical-tab ${activeTab === 6 ? 'active' : ''}`}
          onClick={() => handleTabClick(6)}
        >
         <img src={help} alt="" className="oh" /> Help and Support
        </div></Link>
        <div
          className={`vertical-tab ${activeTab === 7 ? 'active' : ''}`}
          onClick={() => handleTabClick(7)}
        >
         <img src={logout} alt="" className="oh" /> Logout
        </div>
        {/* Add more tabs as needed */}
      </div>
      

     
      <div className="contenttxt">
 <div className="tab-content" id='activecontent'>
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
      </div>
    </div>
  );
};

export default VerticalTabs;
