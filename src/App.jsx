import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExploreTemplate from "./Pages/Explore-template";
import Homepage from "./Pages/Homepage";
import TemplateDetails from "./Pages/TemplateExtend";

function App() {
  return (
    <Router>
  
        
      
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/temp" element={<ExploreTemplate />} />
          <Route path={"/tempdetails/:id"} element={<TemplateDetails />} />
        </Routes>
      
    </Router>
  );
}

export default App;
