import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Templatedata from '../Data/explorecard.json';
import '../Pages/explore.css' // Importing the JSON data

import CenterMode from "../components/Carousal22";
import Pricesection from "../components/Pricesec";


function TemplateDetails() {
  const { id } = useParams(); // Extract the ID from URL parameter
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    // Find the template with the matching ID
    const selectedTemplate = Templatedata.find(template => template.id === parseInt(id));
    setTemplate(selectedTemplate);
  }, [id]); // Re-run effect when ID changes

  if (!template) {
    return <div>Loading...</div>; // Placeholder for when template data is being fetched
  }

  return (
    <><div className="main-detail">
      <div className="sub-detail">
        <p className="temp"> {template.template}</p>
        <h1>{template.name}</h1>
        <p className="price"> ₹{template.Prize}</p>

        {/* Render other template details here */}
      </div>
      <div className="discriptiontemp">
        <p>{template.description}</p>
        <button className="get">Get This Template</button>
        <button className="free">Free Preview</button>
      </div>

    </div><div className="crsal">
        <CenterMode />


      </div>
      <div className="pricesec">
        <Pricesection/>
      </div>
      </>
  );
}

export default TemplateDetails;
