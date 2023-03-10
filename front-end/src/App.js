import './App.css';
import { Route, Routes, UNSAFE_enhanceManualRouteObjects } from 'react-router-dom';
import Nabvar from './components/navbar/Navbar';
import Home from "./containers/Home";
import LoginScr from "./containers/LoginScr";
import StudentLoginScr from "./components/Login/stdLogin";
import RecruiterLoginScr from "./components/Login/compLogin";
import RegisterScr from './containers/RegisterScr';
import StudentRegister from './components/Register/stdregister';
import RecruiterRegister from './components/Register/compregister';
import StudentDash from './containers/Student/Student';
import Uploaddoc from './containers/Student/Upload';
import StudentProfile from './containers/Student/Profile';
import EditStudentProfile from './containers/Student/EditProfile';
import StudentAddress from './containers/Student/Address';
import EditPerStudentAddress from './containers/Student/EditPerAddress';
import StudentQualify from './containers/Student/Qualification';
import EditStudentQualify from './containers/Student/EditQualify';
import AddStudentQualify from './containers/Student/AddQualify';
import EditTempAddress from './containers/Student/EditTempAddress';

import AddStudentProfile from './containers/Student/AddProfile';
import AddPerStudentAddress from './containers/Student/AddPerAddress';
import AddTempAddress from './containers/Student/AddTempAddress';
import AddStudentEducat from './containers/Student/AddEducat';
import Reviewform from './containers/Student/ReviewForm';

import Admin from './containers/Admin/Admn';
import Recruiter from './containers/Recruiter';
import StudentDashboard from './containers/Page';

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

        <Route path="/student" element={<StudentDash />}>
          <Route path="stdprofile" element={<StudentProfile />} />
          <Route path="stdaddress" element={<StudentAddress />} />
          <Route path="stdqualify" element={<StudentQualify />} />
          <Route path="uploaddoc" element={<Uploaddoc />} />
          <Route path="editstdprofile" element={<EditStudentProfile />} />
          <Route path="editstdperaddress" element={<EditPerStudentAddress />} />
          <Route path="editstdtempaddress" element={<EditTempAddress />} />
          <Route path="editstdqualify/:id" element={<EditStudentQualify />} />
          <Route path="addstdqualify" element={<AddStudentQualify />} />

          <Route path="addstdprofile" element={<AddStudentProfile />} />
          <Route path="addstdperaddress" element={<AddPerStudentAddress />} />
          <Route path="addstdtempaddress" element={<AddTempAddress />} />
          <Route path="addstdeducat" element={<AddStudentEducat />} />
          <Route path="reviewform" element={<Reviewform />} />
        </Route>

        <Route path="/stddash" element={<StudentDashboard />}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/recruiter" element={<Recruiter />} />
        
      </Routes>
    </div>
  );
}

export default App;
