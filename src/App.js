import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminStatus from './pages/adminStatus/AdminStatus';
import AdminProfile from './pages/adminProfile/AdminProfile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin/status' element={<AdminStatus/>}/>
        <Route path='/admin/profile' element={<AdminProfile/>}/>
      </Routes>
    </Router>
  )
}

export default App;