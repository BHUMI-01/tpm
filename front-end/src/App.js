
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./containers/Home";
import LoginScr from "./containers/LoginScr";
import RegisterScr from './containers/RegisterScr';
import Dashboard from './containers/Dashboard';
import PrivateComponent from './components/PrivateComponent';
import Logout from './containers/Logout';
import Uploaddoc from './containers/Upload';
import StudentProfile from './containers/Profile';
import EditStudentProfile from './containers/EditProfile';
import StudentAddress from './containers/Address';
import EditStudentAddress from './containers/EditAddress';
import StudentQualify from './containers/Qualification';
import EditStudentQualify from './containers/EditQualify';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route  element={<PrivateComponent />} >
        
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/uploaddoc" element={<Uploaddoc />} />
          <Route path="/stdprofile" element={<StudentProfile />} />
          <Route path="/editstdprofile" element={<EditStudentProfile />} />
          <Route path="/stdaddress" element={<StudentAddress />} />
          <Route path="/editstdaddress" element={<EditStudentAddress />} />
          <Route path="/stdqualify" element={<StudentQualify />} />
          <Route path="/editstdqualify" element={<EditStudentQualify />} />
          </Route>
          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterScr />} />
          <Route path="/login" element={<LoginScr />} />
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
