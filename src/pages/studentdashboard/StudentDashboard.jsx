import React, { useState } from 'react';
import {Container, Grid,Typography } from '@mui/material';
import Card from '../../components/Card/Card';
import UpcomingLessons from '../../components/upcomingLessons/UpcomingLessons';
import './StudentDashboard.css';
import NoticeBoard from '../../components/noticeBoard/NoticeBoard';
import UpcomingAssignment from '../../components/upcomingAssignment/UpcomingAssignment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import StudentCard from './StudentCard';

const StudentDashboard = () => {
    const [openStudentStatus, setOpenStudentStatus]=useState(true);
    const [openStudentProfile, setOpenStudentProfile]=useState(false);

    const handleStudentStatus=()=>{
        setOpenStudentStatus(true);
        setOpenStudentProfile(false);
    }
    const handleStudentProfile=()=>{
        setOpenStudentStatus(false);
        setOpenStudentProfile(true);
    }
    const [sabout, setSabout]=useState(true);
    const [spassword,setSpassword]=useState(false);

    const handleSabout=()=>{
        setSabout(true);
        setSpassword(false);
    }
    const handleSPassword=()=>{
        setSabout(false);
        setSpassword(true);
    }

    const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPassword('');
    setNewPassword('');
    setError('');
    }
    

  return (
    <div className='student-dashboard'>
    <Container>
    {openStudentStatus &&
       <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Student Panel</h5>
            <h4 onClick={handleStudentStatus} className={openStudentStatus?'active': ''} style={{cursor: 'pointer'}}>Status</h4>
            <h4 onClick={handleStudentProfile} className={openStudentProfile?'active':''} style={{cursor: 'pointer'}}>Profile</h4>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className='student-card'>
                <StudentCard type='available'/>
                <StudentCard type='assigned'/>
            </div>
            <div className='upcoming-student'>
                <UpcomingLessons/>
                <UpcomingAssignment/>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
          <NoticeBoard/>
          </Grid>
        </Grid>
    }
    {openStudentProfile &&
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Student Panel</h5>
            <h4 onClick={handleStudentStatus} style={{cursor: 'pointer'}}>Status</h4>
            <h4 onClick={handleStudentProfile} className={openStudentProfile?'active':''}>Profile</h4>
          </Grid>
          <Grid item xs={12} md={9}>
          <div className='profile-container'>
          <div className='profile-admin'>
            <div className='profileadmin-info'>
                <div className='profileadmin-image'>
                    <img src='/images/student-logo.png' alt=''/>
                </div>
                <div className='profileadmin-name'>
                    <h2>Samina Tasneem</h2>
                    <h3>Student</h3>
                    <p>2019331098</p>
                    <p><span><LocationOnIcon style={{width: '17px', height:'17px'}}/></span>  Location</p>
                    
                </div>
            </div>
            <div className='edit-btn'>
                <button><span><EditIcon style={{width: '17px', height: '17px'}}/></span>Edit</button>
            </div>
            </div>
            
            <div className='profile-buttons'>
                <button onClick={handleSabout} 
                className={sabout ? 'active' : ''}
                >
                About</button>
                <button onClick={handleSPassword}
                className={spassword ? 'active' : ''}
                >Password</button>
            </div>
            </div>
            {sabout &&
            <div className='profile-details'>
            <div className='personal-title'>
                <h2>Personal Details</h2>
                <button><span><EditIcon style={{width: '17px', height: '17px'}}/></span>Edit</button>
            </div>
            <div className='personal-details'>
                <span className='left-side'>Gender:</span><span className='right-side'>Female</span><br/>
                <span className='left-side'>Date of Birth:</span><span className='right-side'>20/8/2000</span><br/>
                <span className='left-side'>Email:</span><span className='right-side'>samina@gmail.com</span><br/>
                <span className='left-side'>Phone:</span><span className='right-side'>01826700175</span><br/>
                <span className='left-side'>Address:</span><span className='right-side'>IICT, SUST, Sylhet</span><br/>
                

                
            </div>
            </div>}
            {spassword &&
                <div className="change-password-form">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
          
        {error && <p className="error-message">{error}</p>}
        <button className='password-btn' type="submit">Change Password</button>
      </form>
    </div>
            }
          </Grid>
          </Grid>
    }
    </Container>
    </div>
  )
}

export default StudentDashboard