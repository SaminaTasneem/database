import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './StudentDashboard.css';
import { useNavigate } from 'react-router-dom';

const StudentCard = (props) => {
    const navigate = useNavigate();
    const [openCourseList, setOpenCourseList]=React.useState(false);
    const [openCourseDetails, setOpenCourseDetails]=React.useState(false);
    const handleOpenCourseList=()=>{
        setOpenCourseList(true);
    }
    const handleCloseCourseList=()=>{
        setOpenCourseList(false);
    }
    const handleOpenCourseDetails=()=>{
        if(props.type==='assigned') navigate('/student-course-details');
        else setOpenCourseDetails(true);
    }
    const handleCloseCourseDetails=()=>{
        setOpenCourseDetails(false);
    }
  return (
    <>
    <div className='card-container' onClick={handleOpenCourseList}>
      <div className='left'>
      <h2 style={{textTransform:'uppercase'}}>{props.type} courses</h2>
      <h4>1234</h4>
      </div>
      <div className='right'>
      <img src='/images/course-logo.png'/>
      </div>
    </div>
    <Dialog
    open={openCourseList}
    onClose={handleCloseCourseList}
    keepMounted
     >
     <DialogTitle>Course List:</DialogTitle>
     <DialogContent>
     <section className='course'>
    <table width="100%">
        <thead className='thead'>
            <tr>
                <td>Image</td>
                <td>Title</td>
                <td>Code</td>
                <td>Credit</td>
                <td>Prerequisite</td>
            </tr>
        </thead>
        <tbody>
            <tr onClick={handleOpenCourseDetails} style={{cursor: 'pointer'}}>
                <td>Image</td>
                <td>Database Management System</td>
                <td>CSE333</td>
                <td>3</td>
                <td>None</td>
            </tr>
        </tbody>
    </table>
    </section>
     </DialogContent>
     <DialogActions>
        <Button color='primary' onClick={handleCloseCourseList}>Cancel</Button>
     </DialogActions>
    </Dialog>
    <Dialog
     open={openCourseDetails}
     onClose={handleCloseCourseDetails}
     keepMounted
     maxWidth='lg'>
     <DialogTitle>
     <div className='dialog-title'>
        <h3>COURSE DETAILS</h3>
        <div className='closeIcon' onClick={handleCloseCourseDetails}>
        <CloseIcon/>
        </div>
    </div>
     </DialogTitle>
     <DialogContent>
    <div className='profile'>
        <div className='profile-image'>
            <img src='/images/course-profile.png' alt='image' style={{width: '300px', height: '300px'}}/>
        </div>
        <div className='profile-details' style={{background: '#fff', boxShadow: 'none'}}>
            <h1>Database Management System</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc purus nisl,
                ornare vitae quam et, rutrum egestas lorem.Aenean consectetur magna ut volutpat
                scelerisque.
            </p>
            <span className='left-side'>Course Code: </span><span className='right-side'>CSE333</span><br/>
            <span className='left-side'>Credit: </span><span className='right-side'>3</span><br/>
            <span className='left-side'>Type:</span><span className='right-side'>Lab</span><br/>
            <span className='left-side'>Prerequisite: </span><span className='right-side'>None</span><br/>
            <div className='profile-button'>
            <Button variant="contained">Request Assign</Button>
            </div>
        </div>
        </div>
    </DialogContent>

     </Dialog>
    </>
  )
}

export default StudentCard