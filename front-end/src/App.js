import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nabvar from './components/navbar/Navbar';
import Home from "./containers/Home";
import LoginScr from "./containers/LoginScr";
import StudentLoginScr from "./components/Login/Login";
import RecruiterLoginScr from "./components/Login/login3";
import RegisterScr from './containers/RegisterScr';
import StudentRegister from './components/Register/register';
import RecruiterRegister from './components/Register/register3';
import Uploaddoc from './containers/Upload';
import StudentProfile from './containers/Profile';
import EditStudentProfile from './containers/EditProfile';
import StudentAddress from './containers/Address';
import EditPerStudentAddress from './containers/EditPerAddress';
import StudentQualify from './containers/Qualification';
import EditStudentQualify from './containers/EditQualify';
import AddStudentQualify from './containers/AddQualify';
import EditTempAddress from './containers/EditTempAddress';
import Admin from './containers/Admin/Admn';
import Recruiter from './containers/Recruiter';
function App() {
  return (
    <div>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterScr />} />
        <Route path="/stdregister" element={<StudentRegister />} />
        <Route path="/compregister" element={<RecruiterRegister />} />
        <Route path="/login" element={<LoginScr />} />
        <Route path="/stdlogin" element={<StudentLoginScr />} />
        <Route path="/complogin" element={<RecruiterLoginScr />} />
        <Route path="/uploaddoc" element={<Uploaddoc />} />
        <Route path="/stdprofile" element={<StudentProfile />} />
        <Route path="/editstdprofile" element={<EditStudentProfile />} />
        <Route path="/stdaddress" element={<StudentAddress />} />
        <Route path="/editstdperaddress" element={<EditPerStudentAddress />} />
        <Route path="/editstdtempaddress" element={<EditTempAddress />} />
        <Route path="/stdqualify" element={<StudentQualify />} />
        <Route path="/editstdqualify/:id" element={<EditStudentQualify />} />
        <Route path="/addstdqualify" element={<AddStudentQualify />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </div>
  );
}

export default App;
