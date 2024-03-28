import React from 'react';
import './App.css';
import './index.css';
import '/src/components/dash.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './components/MUI components/Loader';

// Import all your components
import { Login } from './User-Dashboard/pages/loginsignup page/Login';
import { Signup } from './User-Dashboard/pages/loginsignup page/Signup';
import { Homepage } from './User-Dashboard/pages/Dashboard/Homepage';
import { Templetes } from './User-Dashboard/pages/Wishes/template';
import { Wishes } from './User-Dashboard/pages/Templates/wishes';
import { Gallery } from './User-Dashboard/MUI components/gallery';
import { Help } from './User-Dashboard/pages/Help/help';
import { Setting } from './User-Dashboard/pages/Setting/settings';
import { Forgotpassword } from './User-Dashboard/pages/loginsignup page/Forgotpasswrd';
import { MainCustom } from './User-Dashboard/pages/Templates/MianCustom';
import Imageupload from './User-Dashboard/pages/Gallery-upld/imageupld';
import Overview from './Admin-dashboard/pages/Overview';
import Templates from './Admin-dashboard/pages/templates';
import Chat from './Admin-dashboard/pages/chat';
import Orders from './Admin-dashboard/pages/Orders';
import Category from './Admin-dashboard/component/Category';
import ExploreTemplate from './Invitation-nation/Pages1/Explore-template';
import TemplateDetails from './Invitation-nation/Pages1/TemplateExtend';
import Homepage1 from './Invitation-nation/Pages1/Homepage';
import NotFound from './User-Dashboard/MUI components/Errorpage';

function App() {
  // State to manage loading state
  const [loading, setLoading] = useState(true);

  // Listen for route changes
  useEffect(() => {
    // Set loading state to true when route changes
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the loading duration as needed

    // Clean up timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading"><Loader/></div>
      ) : (
        <Router>
          <Routes>
            <Route path='/user' element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dash" element={<Homepage />} />
            <Route path='/templetes' element={<Wishes />} />
            <Route path='/wishes' element={<Templetes />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/help' element={<Help />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/forgotpass' element={<Forgotpassword />} />
            <Route path='/Coustomise' element={<MainCustom />} />
            <Route path='/imageupld' element={<Imageupload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Overview" element={<Overview />} />
            <Route path="/Templates" element={<Templates />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/" element={<Homepage1 />} />
            <Route path="/temp" element={<ExploreTemplate />} />
            <Route path="/tempdetails/:id" element={<TemplateDetails />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
