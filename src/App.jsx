import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Student/Home/Home";
import About from "./pages/Student/About/About";
import Admission from "./pages/Student/Admission/Admission";
import Contact from "./pages/Student/Contact/Contact";
import Login from "./pages/Student/Auth/Login/Login";
import Signup from "./pages/Student/Auth/Signup/Signup";
import Course from "./pages/Student/Course/Course";
import Faculty from "./pages/Student/Faculty/Faculty";
import Gallery from "./pages/Student/Gallery/Gallery"
import Dashboard from "./pages/Student/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Student/Dashboard/Profile";
import Attendance from "./pages/Student/Dashboard/Attendance";
import Result from "./pages/Student/Dashboard/Result";
import Note from "./pages/Student/Dashboard/Note";
import Setting from "./pages/Student/Dashboard/Setting";
import Admindb from "./pages/Admin/Admindb";
import Students from "./pages/Admin/Students";
import AdmissionsAdmin from "./pages/Admin/AdmissionsAdmin";
import Notices from "./pages/Admin/Notices";
import FacultyAdmin from "./pages/Admin/FacultyAdmin";
import AdminSettings from "./pages/Admin/AdminSettings";
import ResultAdmin from "./pages/Admin/ResultAdmin";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Faculty" element={<Faculty />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/Profile" element={<Profile />} />
        <Route path="/Dashboard/Attendance" element={<Attendance />} />
        <Route path="/Dashboard/Result" element={<Result />} />
        <Route path="/Dashboard/Note" element={<Note />} />
        <Route path="/Dashboard/Setting" element={<Setting />} />
        <Route path="/Admindb" element={<Admindb />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/AdmissionsAdmin" element={<AdmissionsAdmin />} />
        <Route path="/Notices" element={<Notices/>} />
        <Route path="/FacultyAdmin" element={<FacultyAdmin/>} />
        <Route path="/AdminSettings" element={<AdminSettings/>} />
        <Route path="/ResultAdmin" element={<ResultAdmin/>} />


    
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
