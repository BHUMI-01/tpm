
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./containers/Home";
import LoginScr from "./containers/LoginScr";
import RegisterScr from './containers/RegisterScr';
import Dashboard from './containers/Dashboard';
import PrivateComponent from './components/PrivateComponent';
import Logout from './containers/Logout';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route  element={<PrivateComponent />} >
        
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/logout" element={<Logout />} />
          </Route>
          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterScr />} />
          <Route path="/login" element={<LoginScr />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
