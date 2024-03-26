import React from "react";
import Templatedata from '../Data1/explorecard.json'
import '../Pages1/explore.css'
import { Link } from "react-router-dom";
function TemplateCards({ searchQuery }) {
  const filteredTemplates = Templatedata.filter(template => {
    // Perform case-insensitive search on the template name 
    return template.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Sample template data
  return (

    <div className="template-cards" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

      {filteredTemplates.map((template) => (
        <Link key={template.id} to={`/tempdetails/${template.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <div className="card">
            <div className="cardsec"></div>
            <div className="carddisplay">
              <h3 className="cardtitle">{template.name}</h3>
              <p className="cardprice"> ₹ {template.Prize}</p>
            </div>
            <p className="cardtemplate"> {template.template}</p>

          </div>
        </Link>
      ))}
    </div>
  );
}


export default TemplateCards;