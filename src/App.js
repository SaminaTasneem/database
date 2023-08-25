import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminStatus from './pages/adminStatus/AdminStatus';
import AdminProfile from './pages/adminProfile/AdminProfile';
import TeacherDashboard from './pages/teacherDashboard/TeacherDashboard';
import TeacherCourseDetails from './pages/teacherCourseDetails/TeacherCourseDetails';
import StudentDashboard from './pages/studentdashboard/StudentDashboard';
import Login from './pages/login-signup/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/status' element={<AdminStatus/>}/>
        <Route path='/admin/profile' element={<AdminProfile/>}/>
        <Route path='/teacher-dashboard' element={<TeacherDashboard/>}/>
        <Route path='/teacher-course-details' element={<TeacherCourseDetails/>}/>
        <Route path='/student-dashboard' element={<StudentDashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App;