import './App.css'
import { Login } from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/Signup';
import {Signup2} from './components/signup2';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signup2" element={<Signup2 />} /> */}
          {/* Add more routes for additional steps if needed */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
 