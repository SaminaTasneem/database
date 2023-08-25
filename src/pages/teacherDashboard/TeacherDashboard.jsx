import React,{useState} from 'react';
import Card from '../../components/Card/Card';
import {Container, Grid,Typography } from '@mui/material';
import PieChart from '../../components/pieChart/PieChart';
import Calendar from '../../components/calendar/Calendar';
import NoticeBoard from '../../components/noticeBoard/NoticeBoard';
import AdminMenu from '../../components/adminMenu/AdminMenu';
import './TeacherDashboard.css';
import UpcomingLessons from '../../components/upcomingLessons/UpcomingLessons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import TeacherCard from '../../components/teacherCard/TeacherCard';

const TeacherDashboard = () => {
    const [tstatus, setTstatus]=useState(true);
    const [tprofile, setTprofile]=useState(false);
    const handleTstatus=()=>{
        setTstatus(true);
        setTprofile(false);
    }
    const handleTprofile=()=>{
        setTstatus(false);
        setTprofile(true);
    }

    const [tabout, setTabout]=useState(true);
    const [tpassword,setTpassword]=useState(false);

    const handleTabout=()=>{
        setTabout(true);
        setTpassword(false);
    }
    const handlePassword=()=>{
        setTabout(false);
        setTpassword(true);
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
    <>
    <Container>
    {tstatus && 
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Teacher Panel</h5>
            <h4 onClick={handleTstatus} className='teacher-active'>Status</h4>
            <h4 onClick={handleTprofile} style={{cursor: 'pointer'}}>Profile</h4>
          </Grid>

          
          <Grid item xs={12} md={7}>
          <div className='teacher-container'>
          <div className='teacher-cards'>
            <Card type='student'/>
            <Card type='teacher-course'/>
          </div>
          <div className='teacher-pie-calendar'>
          <div className='teacher-pie'>
            <PieChart/>
            </div>
            <div className='teacher-calendar'>
            <Calendar className='calendar'/>
          </div>
          </div>
          </div>
          
          <NoticeBoard/>
          </Grid>
          <Grid item xs={12} md={3}>
          <div className='lessons'>
            <UpcomingLessons/>
            </div>
          </Grid>
        </Grid>}
        {tprofile && 
            <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Teacher Panel</h5>
            <h4 onClick={handleTstatus} style={{cursor: 'pointer'}}>Status</h4>
            <h4 onClick={handleTprofile} className='teacher-active'>Profile</h4>
          </Grid>
          <Grid item xs={12} md={9}>
          <div className='profile-container'>
          <div className='profile-admin'>
            <div className='profileadmin-info'>
                <div className='profileadmin-image'>
                    <img src='/images/student-logo.png' alt=''/>
                </div>
                <div className='profileadmin-name'>
                    <h2>S M Mesbahul Islam</h2>
                    <h3>Swipper</h3>
                    <p><span><LocationOnIcon style={{width: '17px', height:'17px'}}/></span>  Location</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className='edit-btn'>
                <button><span><EditIcon style={{width: '17px', height: '17px'}}/></span>Edit</button>
            </div>
            </div>
            
            <div className='profile-buttons'>
                <button onClick={handleTabout} 
                className={tabout ? 'active' : ''}
                >
                About</button>
                <button onClick={handlePassword}
                className={tpassword ? 'active' : ''}
                >Password</button>
            </div>
            </div>
            {tabout &&
            <div className='profile-details'>
            <div className='personal-title'>
                <h2>Personal Details</h2>
                <button><span><EditIcon style={{width: '17px', height: '17px'}}/></span>Edit</button>
            </div>
            <div className='personal-details'>
                <span className='left-side'>Gender:</span><span className='right-side'>Male</span><br/>
                <span className='left-side'>Date of Birth:</span><span className='right-side'>again mone nai</span><br/>
                <span className='left-side'>Email:</span><span className='right-side'>mesbahulislam679@gmail.com</span><br/>
                <span className='left-side'>Phone:</span><span className='right-side'>01123456780</span><br/>
                <span className='left-side'>Address:</span><span className='right-side'>IICT, SUST, Sylhet</span><br/>
                <span className='left-side'>Office Location:</span><span className='right-side'>10k er job jekhane paisish</span><br/>

                
            </div>
            </div>}
            {tpassword &&
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
          </Grid>}
        </Container>
    </>
  )
}


export default TeacherDashboard