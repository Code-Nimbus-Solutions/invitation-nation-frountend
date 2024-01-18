import './App.css'
import { Login } from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Homepage } from './components/Homepage';
import { Templetes } from './components/template';
import { Wishes } from './components/wishes';
import { Gallery } from './components/gallery';
import { Help } from './components/help';
import { Setting } from './components/settings';
import { Forgotpassword } from './components/Forgotpasswrd';

function App() {
  return (
    <div className="app">
      
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dash" element={<Homepage />} />
          <Route path='/templetes' element={<Templetes />} />
          <Route path='/wishes' element={<Wishes />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/help' element={<Help />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/forgotpass' element={<Forgotpassword/>}/>
        </Routes>
     
    </div>
  )
}

export default App;
