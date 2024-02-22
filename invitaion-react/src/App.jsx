import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword } from "./components/ForgotPassword";
import Overview from "./pages/Overview";
import Templates from "./pages/Templates";
import Chat from "./pages/Chat";
import Orders from "./pages/Orders";
import Category from "./components/Category";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
