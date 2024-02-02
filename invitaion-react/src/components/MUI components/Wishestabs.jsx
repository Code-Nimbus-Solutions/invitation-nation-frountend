import React, { useState } from 'react';
import '../css files/wishtab.css';
import Wishesdata from '../Data/Wishesdata.json';

const WishTabs = () => {
  const [wishes, setWishes] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [activeTimeTab, setActiveTimeTab] = useState('last24'); // New state for time tabs

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleTimeTabClick = (timeTab) => {
    setActiveTimeTab(timeTab);
  };

  
  // Set wishes data on mount
  useState(() => {
    setWishes(Wishesdata.Wishes);
  }, []);

  const filterWishesByType = (type) => {
    const filteredWishes = wishes.filter((wish) => wish.type === type);

    // Sort wishes by date and time
    const sortedWishes = filteredWishes.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateA - dateB;
    });

    return sortedWishes;
  };

  const handleHideButtonClick = (name, type) => {
    let updatedType = 'Hide';

    if (type === 'Show') {
      updatedType = 'Public';
    }

    // Update the type of the wish
    const updatedWishes = wishes.map((wish) =>
      wish.name === name ? { ...wish, type: updatedType } : wish
    );

    setWishes(updatedWishes);
  };
  const calculateTimeDifference = (postDate) => {
    const currentDate = new Date();
    const postedDate = new Date(postDate);
  
    const timeDifference = currentDate - postedDate;
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(hoursDifference / 24);
    const remainingHours = hoursDifference % 24;
  
    if (daysDifference > 0) {
      if (remainingHours > 0) {
        return `${daysDifference} d ${remainingHours} h`;
      } else {
        return `${daysDifference} d`;
      }
    } else {
      return `${hoursDifference} h`;
    }
  };
  

  return (
    <div className='mainwishcont'>
     <div className="maincaardcont">
      <h1>Wish Report</h1>
      <div className="pcontainer">
        <p className={`time-tab ${activeTimeTab === 'last24' ? 'active' : ''}`} onClick={() => handleTimeTabClick('last24')}>
        Last 24hr
      </p>
      <p  className={`time-tab ${activeTimeTab === 'last1' ? 'active' : ''}`} onClick={() => handleTimeTabClick('last1')}>
        Last 1 Hour
      </p>
      <p className={`time-tab ${activeTimeTab === 'last7' ? 'active' : ''}`} onClick={() => handleTimeTabClick('last7')}>
        Last 7days
      </p>

     
      </div>
       <div className="minicardcont">
        <div className="card1">
          <p className="numbwish">
            350
          </p>
          <p className="wrdwish">New Unread Wishes</p>
        </div>
        <div className="card2">
          <p className="numbwish">
            150
          </p>
          <p className="wrdwish">Public Wishes</p>
        </div>
        <div className="card3">
          <p className="numbwish">
            15
          </p>
          <p className="wrdwish">Hidden Wishes</p>
        </div>
      </div>
     </div>   
     <div className="pmobcontainer">
          <select
            className="tab-dropdown"
            value={activeTab}
            onChange={(e) => handleTabClick(Number(e.target.value))}
          >
            <option value={1}>Unread</option>
            <option value={2}>Hidden</option>
            <option value={3}>Public</option>
          </select>
          {/* ... (rest of the pcontainer content) */}
        </div>
      <div className="tab-container">
   
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Unread
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Hidden
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Public
        </div>
      </div>
      <div className="wishcontent">

      
        {/* Render content based on activeTab */}
        {activeTab === 1 && (
          <div className='activetabwish'>
            {filterWishesByType('Show').map((wish) => (
              <div key={wish.name}>
                <div className="wishnb">
                    <h3 className="wishname">
                    {wish.name}
                </h3>
                <p className="wishbadge">
                    Team {wish.side}
                </p>
                </div>
                
                 
                 <p className="mainwishes">
                    {wish.wish}
                    </p>  
                    <p className="wishdate">
                    {calculateTimeDifference(`${wish.date} ${wish.time}`)}
                        </p> 
                        
                <button className='wishshow' onClick={() => handleHideButtonClick(wish.name, wish.type)}>
                  Show on website
                </button>
                <button className='wishhide' onClick={() => handleHideButtonClick(wish.name, wish.type)}>
                  Hide
                </button>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {filterWishesByType('Hide').map((wish) => (
              <div key={wish.name}>
              <div className="wishnb">
                  <h3 className="wishname">
                  {wish.name}
              </h3>
              <p className="wishbadge">
                  Team {wish.side}
              </p>
              </div>
              
               
               <p className="mainwishes">
                  {wish.wish}
                  </p>  
                  <p className="wishdate">
                  {calculateTimeDifference(`${wish.date} ${wish.time}`)}
                      </p> 
                      
              <button className='wishshow' onClick={() => handleHideButtonClick(wish.name, wish.type)}>
                Show on website
              </button>
              {/* <button className='wishhide' onClick={() => handleHideButtonClick(wish.name, wish.type)}>
                Hide
              </button> */}
            </div>
            ))}
          </div>
        )}
        {activeTab === 3 && (
          <div className='wishpersondata'>
            {filterWishesByType('Public').map((wish) => (
               <div key={wish.name}>
               <div className="wishnb">
                   <h3 className="wishname">
                   {wish.name}
               </h3>
               <p className="wishbadge">
                   Team {wish.side}
               </p>
               </div>
               
                
                <p className="mainwishes">
                   {wish.wish}
                   </p>  
                   <p className="wishdate">
                   {calculateTimeDifference(`${wish.date} ${wish.time}`)}
                       </p> 
                       
               {/* <button className='wishshow' onClick={() => handleHideButtonClick(wish.name, wish.type)}>
                 Show on website
               </button> */}
               <button className='wishhide' onClick={() => handleHideButtonClick(wish.name, wish.type)}>
                 Hide
               </button>
             </div>
            ))}
          </div>
        )}
     </div>
    </div>
  );
};

export default WishTabs;
