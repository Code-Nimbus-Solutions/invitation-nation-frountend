import React, { useState, useEffect } from 'react';
import data from './data.json';
import './css files/custom.css';

export function Customizsectab2() {
  const [sections, setSections] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [sectionValues, setSectionValues] = useState({});
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    // Simulating fetching the JSON data. Replace this with your actual data fetching logic.
    setSections(data.template_id);
  }, []);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setSectionValues({}); // Clear values when changing the section
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

  return (<><div className="customise">
    {selectedSection && (
      <div>
        <h2 className="hedcustom">{selectedSection}</h2>

        {/* Displaying image */}
        {sections &&
          sections
            .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection] &&
          sections
            .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection].Img && (
            <div className="imgsec">
              <img
                src={sections
                  .find((section) => Object.keys(section)[0] === selectedSection)[selectedSection].Img}
                alt="Selected Img" className='mainimg'/>
            </div>
          )}

        {/* Rest of your code */}

      </div>
    )}

  <div className="customizemain">






      <div className="customizecont">
        <select onChange={(e) => handleSectionChange(e.target.value)} className="mainsection">
          <option value="" disabled selected>
            Choose a section...
          </option>
          {sections &&
            sections.map((section, index) => (
              <option key={index} value={Object.keys(section)[0]} className="optionmain">
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
