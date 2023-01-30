
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
import EditPerStudentAddress from './containers/EditPerAddress';
import StudentQualify from './containers/Qualification';
import EditStudentQualify from './containers/EditQualify';
import AddStudentQualify from './containers/AddQualify';
import EditTempAddress from './containers/EditTempAddress';
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
          <Route path="/editstdperaddress" element={<EditPerStudentAddress />} />
          <Route path="/editstdtempaddress" element={<EditTempAddress/>} />
          <Route path="/stdqualify" element={<StudentQualify />} />
          <Route path="/editstdqualify/:id" element={<EditStudentQualify />} />
          <Route path="/addstdqualify" element={<AddStudentQualify />} />
          </Route>
          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterScr />} />
          <Route path="/login" element={<LoginScr />} />
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
