import React, { useState } from "react";
import Tabs from '../components1/Extabs';
import './explore.css';

export default function ExploreTemplate(){
    // State to manage the search query
    const [searchQuery, setSearchQuery] = useState("");

    return(
        <div className="main">
            <div className="subcontainer">
                <h1 className="maintext">
                Fully responsive Invitation Templates
                </h1>
                <p className="exploretxt">
                Creating a digital wedding invitation website is easier than ever with a wide range of templates for all your events
                </p>
                <input 
                  type="text" 
                  className="searchfield" 
                  placeholder='Search for Templates'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                /> 
                
                <div className="tabscontent">
                  <div className="tab">
                    {/* Pass down the searchQuery and setSearchQuery as props */}
                    <Tabs searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                  </div>
                </div>
            </div>
        </div>
    )
}
