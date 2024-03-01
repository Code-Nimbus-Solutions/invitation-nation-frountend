import React, { useState, useEffect } from 'react';
import { Customizsec } from '../../components/pages/Templates/Customisesec';
import '../css_files/tabcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { Customizsectab2 } from '../../components/pages/Templates/customisesectab2';
import leftarrow from "/src/assets/arrow_back_ios.svg"

function HorizontalTabs() {
  const [activeTab, setActiveTab] = useState(() => {
    // Retrieve the activeTab value from localStorage or use a default value
    return parseInt(localStorage.getItem('activeTab')) || 0;
  });

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabData = [
    { label: 'Hero Section', content: <Customizsec /> },
    { label: 'About couple', content: <Customizsectab2 /> },
    { label: 'Event Schedule', content: 'Content for Tab 3' },
  ];

  useEffect(() => {
    // Store the activeTab value in localStorage whenever it changes
    localStorage.setItem('activeTab', activeTab.toString());
  }, [activeTab]);

  return (
    <div className='minidash'>
      <div style={{ display: 'flex' }} className='tabshorisec'>
        <Link to='/templetes' style={{ textDecoration: "none" }}>
          <p className="back"><img src={leftarrow} alt="" className="leftarw" />Back to Dashboard</p>
          <img src={leftarrow} alt="" className="leftarwmobile" />

        </Link>
        <div className="desktoptab">

        
        {tabData.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: activeTab === index ? '#36004E' : '',
              color: activeTab === index ? 'white' : 'black',
            }}
            className='tabparts'>
            {tab.label}
          </div>
        ))}
      </div></div>
      <div className="mobiletabs">
      <select
            className='slect'
            value={activeTab} // Set the selected value based on the activeTab state
            onChange={(e) => handleTabClick(parseInt(e.target.value))}
          >
            {tabData.map((tab, index) => (
              <option key={index} value={index}>
                {tab.label}
              </option>
            ))}
          </select>
        
      </div>

      <div style={{ marginTop: '20px' }}>
        {tabData.map((tab, index) => (
          <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }} className='tabcontent'>
            {tab.content}
          </div>
        ))}
      </div>

      <div className="progress">
        <div className="progress1">
          <p className="percent">60% Completed</p>
          <LinearProgress
            variant="determinate"
            value={50}  // Set the progress value as needed (0 to 100)
            sx={{
              backgroundColor: '#e8e6e1',  // Background color of the progress bar
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'purple',  // Change this to your desired color
              }, width: "13rem", height: "0.7rem", borderRadius: "1rem"
            }}
          /></div> <div className="snsmain">
          <button className="sns">Save & submit</button>
        </div>
      </div>
    </div>
  );
}


export default HorizontalTabs;
