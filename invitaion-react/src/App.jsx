import './App.css';
import './index.css';
import '/src/components/dash.css';
import { BrowserRouter as Router,  Routes, Route, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from './components/MUI components/Loader';

// Import all your components
import { Login } from './components/pages/loginsignup page/Login';
import { Signup } from './components/pages/loginsignup page/Signup';
import { Homepage } from './components/pages/Dashboard/Homepage';
import { Templetes } from './components/pages/Wishes/template';
import { Wishes } from './components/pages/Templates/wishes';
import { Gallery } from './components/gallery';
import { Help } from './components/pages/Help/help';
import { Setting } from './components/pages/Setting/settings';
import { Forgotpassword } from './components/pages/loginsignup page/Forgotpasswrd';
import { MainCustom } from './components/pages/Templates/MianCustom';
import Imageupload from './components/pages/Gallery-upld/imageupld';
import Overview from './pages/Overview'
import Templates from './pages/templates';
import Chat from './pages/chat';
import Orders from './pages/orders';
import Category from './components/Category'
import ExploreTemplate from './Pages1/Explore-template'
import TemplateDetails from './Pages1/TemplateExtend'
import  Homepage1  from './Pages1/Homepage';




function App() {
  // State to manage loading state
  const [loading, setLoading] = useState(true);

  // Listen for route changes
  const location = useLocation();

  useEffect(() => {
    // Set loading state to true when route changes
    setLoading(true);

    
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the loading duration as needed

    // Clean up timeout
    return () => clearTimeout(timeoutId);
  }, [location]); // Trigger effect on route change

  return (
    <div className="app">
      {loading ? (
        <div className="loading"><Loader/></div>
      ) : (
      
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
          <Route path="/" element={<Homepage1/>} />
          <Route path="/temp" element={<ExploreTemplate />} />
          <Route path={"/tempdetails/:id"} element={<TemplateDetails />} />
        </Routes>
       
      )}
          
       
   
    </div>
  );
}

export default App;
