import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminStatus from './pages/adminStatus/AdminStatus';
import AdminProfile from './pages/adminProfile/AdminProfile';
import TeacherDashboard from './pages/teacherDashboard/TeacherDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin/status' element={<AdminStatus/>}/>
        <Route path='/admin/profile' element={<AdminProfile/>}/>
        <Route path='/teacher-dashboard' element={<TeacherDashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App;