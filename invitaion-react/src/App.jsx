import './App.css'
import'./index.css'
import'/src/components/dash.css'

import { Login } from './components/pages/loginsignup page/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/pages/loginsignup page/Signup';
import { Homepage } from './components/pages/Dashboard/Homepage';
import { Templetes } from './components/pages/Wishes/template';
import { Wishes } from './components/pages/Templates/wishes';
import { Gallery } from './components/gallery';
import { Help } from './components/pages/Help/help';
import { Setting } from './components/pages/Setting/settings';
import { Forgotpassword } from './components/pages/loginsignup page/Forgotpasswrd';

import { MainCustom } from './components/pages/Templates/MianCustom';

function App() {
  return (
    <div className="app">
      
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dash" element={<Homepage />} />
          <Route path='/templetes' element={<Wishes />} />
          <Route path='/wishes' element={<Templetes />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/help' element={<Help />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/forgotpass' element={<Forgotpassword/>}/>
          <Route path='/Coustomise' element={<MainCustom/>}/>
        </Routes>
     
    </div>
  )
}

export default App;
