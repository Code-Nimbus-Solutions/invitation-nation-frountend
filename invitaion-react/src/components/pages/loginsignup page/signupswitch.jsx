import React, { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    // Set the current component based on the button click
    switch (componentName) {
      case 'ComponentA':
        setCurrentComponent(<ComponentA />);
        break;
      case 'ComponentB':
        setCurrentComponent(<ComponentB />);
        break;
      // Add more cases for additional components
      default:
        setCurrentComponent(null); // Default to null or some default component
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('ComponentA')}>Load Component A</button>
      <button onClick={() => handleButtonClick('ComponentB')}>Load Component B</button>

      {/* Render the current component */}
      {currentComponent}
    </div>
  );
}

export default App;
