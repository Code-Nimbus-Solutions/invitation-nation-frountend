import React from "react";
import Templatedata from '../Data/explorecard.json'// Importing the JSON data

function HousewarmingTemplateCards({searchQuery}) {
  // Filter the templates array to get only the ones with "Birthday template"
  const filteredTemplates = Templatedata.filter(template => 
    template.template.includes("House Warming template") &&
    template.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="template-cards " style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {filteredTemplates.map((template) => (
        <div className="card" key={template.id} >
        <div className="cardsec"></div>
        <div className="carddisplay">
          <h3 className="cardtitle">{template.name}</h3>
          <p className="cardprice">₹ {template.Prize}</p>
          </div>
          <p className="cardtemplate">  {template.template}</p>
          
        </div>
      ))}
    </div>
  );
}

export default HousewarmingTemplateCards;