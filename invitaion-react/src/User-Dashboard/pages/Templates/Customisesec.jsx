import React, { useState, useEffect, useRef } from 'react';
import data from '../../Data/data.json';
import '../../css files/custom.css';

export function Customizsec() {
  const [sections, setSections] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [sectionValues, setSectionValues] = useState({});
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    // Simulating fetching the JSON data. Replace this with your actual data fetching logic.
    setSections(data.template_id);
    setSelectedSection('Hero Section');
  }, []);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setSectionValues({}); // Clear values when changing the section

    const selectedSectionData = sections.find((item) => Object.keys(item)[0] === section);
    if (selectedSectionData) {
      const selectedSectionId = selectedSectionData[section].id;
      console.log("Selected Section ID:", selectedSectionId);
    }
  };

  const handleInputChange = (field, value) => {
    setSectionValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (selectedSection) {
      setSavedData((prevData) => ({
        ...prevData,
        [selectedSection]: sectionValues,
      }));
    }
  };

  const iframeRef = useRef(null);
  console.log(iframeRef.current);

  // Function to handle scrolling in the iframe
  const scrollToElement = (elementId) => {
    try {
      if (!iframeRef.current) return;
    
      console.log("Scrolling to element:", elementId);
      // Send a message to the iframe with the element ID
      iframeRef.current.contentWindow.postMessage(elementId, '*');
    } catch (error) {
      console.error("Error while scrolling to element:", error);
    }
  };
  // Event listener to handle messages from the iframe
  const handleMessage = (event) => {
    console.log("Received message from iframe:", event.data);
  
    // Check if the message payload contains the expected structure for scrolling
    const isExpectedPayload = event.data && typeof event.data === 'object' && event.data.elementId;
  
    if (isExpectedPayload) {
      const elementId = event.data.elementId;
      console.log("Element ID to scroll to:", elementId);
  
      // Scroll to the element with the specified ID
      const element = document.getElementById(elementId);
      console.log("Element to scroll to:", element);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log("Scrolled to element successfully.");
      } else {
        console.error("Element not found.");
      }
    } else {
      console.log("Received message is not for scrolling. Ignoring.");
    }
  };

  // Attach message event listener when component mounts
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      <div className="customise">
        {selectedSection && (
          <div className='selectedimgcustom'>
            <h2 className="hedcustom">{selectedSection}</h2>

            {/* Displaying image */}
            {sections &&
              sections
                .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection] &&
              sections
                .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection].Img && (
                <div className="imgsec">
                  <iframe
                  ref={iframeRef}
                    src={sections
                      .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection].Img}
                    alt="Selected Img" className='mainimg' style={{ border:"none", overflowX:'hidden', scrollbarWidth:"2px", width:"100%", height:"100%"}}/>
                </div>
              )}

            {/* Rest of your code */}

          </div>
        )}

        <div className="customizemain">
          <div className="customizecont">
          <select onChange={(e) => handleSectionChange(e.target.value)} className="mainsection">
  {sections &&
    sections.map((section, index) => (
      <option key={index} value={Object.keys(section)[0]} id={section[Object.keys(section)[0]].id} onClick={() => scrollToElement(section[Object.keys(section)[0]].id)}>
        {Object.keys(section)[0]}
      </option>
    ))}
</select>



            {selectedSection && (
              <div>
                <h2 className="hedcustom">{selectedSection}</h2>
            {sections &&
              sections
                .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection] &&
              Object.entries(
                sections
                  .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection]
              ).map(([field, fieldType]) => (
                <div key={field} className="custominputfld">
                  <label>{field}</label>
                  {fieldType === 'file' ? (
                    <input
                      type="file"
                      name={field}
                      accept=".jpg, .jpeg, .png, .gif"
                      onChange={(e) => handleInputChange(field, e.target.files[0])}
                      className="filecustom"
                    />
                  ) : fieldType === 'date' ? (
                    <input
                      type="date"
                      name={field}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="datecustom"
                    />
                  ) : fieldType === 'text' ? (
                    <input
                      type="text"
                      name={field}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="textcustom"
                    />
                  ) : fieldType === 'textarea' ? (
                    <textarea
                      name={field}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="textareacustom"
                    ></textarea>
                  ) : null}
                </div>
              ))}
            <div className="savemain">
              <button onClick={handleSave} className="savecustom">
                Save
              </button>
            </div>
          </div>
        )}

        {savedData[selectedSection] && (
          <div>
            <h3>Saved Data:</h3>
            <pre>{JSON.stringify(savedData[selectedSection], null, 2)}</pre>
          </div>
        )}
      </div>
    </div></div></>
  );
}
