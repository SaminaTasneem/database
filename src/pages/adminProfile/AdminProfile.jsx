import React,{useState} from 'react';
import './AdminProfile.css';
import {Container, Grid,Typography } from '@mui/material';
import AdminMenu from '../../components/adminMenu/AdminMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';


const AdminStatus = () => {
    const [about, setAbout]=useState(true);
    const [password,setPassword]=useState(false);

    const handleAbout=()=>{
        setAbout(true);
        setPassword(false);
    }
    const handlePassword=()=>{
        setAbout(false);
        setPassword(true);
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <AdminMenu type='profile'/>
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
                    <h3>Admin</h3>
                    <p><span><LocationOnIcon style={{width: '17px', height:'17px'}}/></span>  Location</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className='edit-btn'>
                <button><span><EditIcon style={{width: '17px', height: '17px'}}/></span>Edit</button>
            </div>
            </div>
            
            <div className='profile-buttons'>
                <button onClick={handleAbout} 
                className={about ? 'password-btn active' : 'password-btn'}
                >
                About</button>
                <button onClick={handlePassword}
                className={password ? 'password-btn active' : 'password-btn'}
                >Password</button>
            </div>
            </div>
            {about &&
            <div className='profile-details'>
            <div className='personal-title'>
                <h2>Personal Details</h2>
                <button><span><EditIcon style={{width: '17px', height: '17px'}}/></span>Edit</button>
            </div>
            <div className='personal-details'>
            <span className='left-side'>Gender:</span><span className='right-side'>Female</span><br/>
                <span className='left-side'>Date of Birth:</span><span className='right-side'>20 August, 2023</span><br/>
                <span className='left-side'>Email:</span><span className='right-side'>samina@gmail.com</span><br/>
                <span className='left-side'>Phone:</span><span className='right-side'>01826700175</span><br/>
                <span className='left-side'>Address:</span><span className='right-side'>1st Ladies hall, SUST, Sylhet</span><br/>
                
            </div>
            </div>}
            {password &&
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
        <button type="submit">Change Password</button>
      </form>
    </div>
            }
          </Grid>
        </Grid>
        </Container>
    </>
  )
}


export default AdminStatus