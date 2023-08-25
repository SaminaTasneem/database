import React,{useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import './Card.css';
import CloseIcon from '@mui/icons-material/Close';
import TeacherProfile from '../smallComponents/teacherProfile/TeacherProfile';
import { Height } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';

const Card = (props) => {

    const [openStudent, setOpenStudent]=useState(false);
    const [openCourse, setOpenCourse]=useState(false);
    const [openTeacher, setOpenTeacher]=useState(false);
  const [openProfile, setOpenProfile]=useState(false);
  const [openCProfile, setOpenCProfile]=useState(false);
  const [openTcourse, setOpenTcourse]=useState(false);
  const [openTeachercourse, setOpenTeachercourse]=useState(false); 
  const navigate = useNavigate();
  
  const handleOpenCard=()=>{
     if(props.type==='student'){
        setOpenStudent(true);
     }
     else if(props.type==='course'){
        setOpenCourse(true);
     }
     else if(props.type==='teacher') setOpenTeacher(true);
     else if(props.type==='teacher-course') setOpenTcourse(true);
  }
  const handleCloseCard=()=>{
    // setOpenCard(false);
    if(props.type==='student'){
        setOpenStudent(false);
     }
     else if(props.type==='course'){
        setOpenCourse(false);
     }
     else if(props.type==='teacher') setOpenTeacher(false);
     else if (props.type==='teacher-course') setOpenTcourse(false);
  }

  const handleOpenProfile=()=>{
    setOpenProfile(true);
  }
  const handleCloseProfile=()=>{
    setOpenProfile(false);
  }
  const handleOpenCProfile=()=>{
    setOpenCProfile(true);
  }
  const handleCloseCProfile=()=>{
    setOpenCProfile(false);
  }
  const handleOpenTeachercourse=()=>{
    setOpenTeachercourse(true);
  }
  const handleCloseTeachercourse=()=>{
    setOpenTeachercourse(false);
  }
  const handleRowClick=()=>{
    navigate('/teacher-course-details');
  }


  let data;
  switch(props.type){
    case 'student': 
        data={
            title: 'STUDENT',
            counter: '1234',
            image: '/images/student-logo.png'
        }
    break;
    case 'teacher': 
        data={
            title: 'TEACHER',
            counter: '1234',
            image: '/images/teacher-logo.png'
        }
    break;
    case 'course': 
        data={
            title: 'COURSE',
            counter: '1234',
            image: '/images/course-logo.png'
        }
    break;
    case 'teacher-course': 
        data={
            title: 'COURSE',
            counter: '1234',
            image: '/images/course-logo.png'
        }
    break;
    default:
      data = {}; // Define default values here
      break;
  }
  return (
    <>
    <div className='card-container' onClick={handleOpenCard}>
      <div className='left'>
      <h2>{data.title}</h2>
      <h4>{data.counter}</h4>
      </div>
      <div className='right'>
      <img src={data.image}/>
      </div>
    </div>
    {/* Student Dialog starts */}
    <Dialog
    open={openStudent}
    keepMounted
    onClose={handleCloseCard}
    className='dialog'
    aria-labelledby="checkout-dialog-title"
    aria-describedby="checkout-dialog-description"
    maxWidth='lg'
    fullWidth
    >
    <DialogTitle className='dialog-name'
    style={{fontSize: '30px', fontWeight: 'bold'}}>
    Student List</DialogTitle>
    <DialogContent>
    <section className='table-list'>
    <table width="100%">
        <thead className='thead'>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Class</td>
                <td>Date of Birth</td>
                <td>Parents Name</td>
                <td>Phone no</td>
                <td>Address</td>
            </tr>
        </thead>
        <tbody>
            <tr  onClick={handleOpenProfile} style={{cursor: 'pointer'}}>
                <td>2019331098</td>
                <td>Samina Tasneem</td>
                <td>1</td>
                <td>20/8/2000</td>
                <td>Md. Abdul Hai</td>
                <td>01826700175</td>
                <td>1st Ladies Hall, SUST, Sylhet</td>
                
            </tr>
        </tbody>
    </table>
    </section>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleCloseCard} color="primary">
        cancel
    </Button>
    </DialogActions>
    </Dialog>

    <Dialog
    open={openProfile}
    keepMounted
    onClose={handleCloseProfile}
    maxWidth='lg'>
    <DialogTitle>
    <div className='dialog-title'>
        <h3>STUDENT DETAILS</h3>
        <div className='closeIcon' onClick={handleCloseProfile}>
        <CloseIcon/>
        </div>
    </div>
    </DialogTitle>
    <DialogContent>
    <div className='profile'>
        <div className='profile-image'>
            <img src='/images/student-profile.jpg' alt='image'/>
        </div>
        <div className='profile-details'>
            <h1>Samina Tasneem</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc purus nisl,
                ornare vitae quam et, rutrum egestas lorem.Aenean consectetur magna ut volutpat
                scelerisque.
            </p>
            <span className='left-side'>ID: </span><span className='right-side'>2019331098</span><br/>
            <span className='left-side'>Email: </span><span className='right-side'>saminatasneem369@gmail.com</span><br/>
            <span className='left-side'>Phone: </span><span className='right-side'>01826700175</span><br/>
            <span className='left-side'>Father's Name: </span><span className='right-side'>Md. Abdul Hai</span><br/>
            <span className='left-side'>Address: </span><span className='right-side'>1st Ladies Hall, SUST, Sylhet</span><br/>
            {/* <span>Gender: </span><span>Female</span>
            <span>Gender: </span><span>Female</span>
            <span>Gender: </span><span>Female</span>
            <span>Gender: </span><span>Female</span> */}


        </div>
        </div>
    </DialogContent>
    </Dialog>
    {/* Student dialog ends */}
    {/* Course Dialog Starts */}
    <Dialog
    open={openCourse}
    keepMounted
    onClose={handleCloseCard}
    className='dialog'
    aria-labelledby="checkout-dialog-title"
    aria-describedby="checkout-dialog-description"
    maxWidth='md'
    fullWidth
    >
    <DialogTitle className='dialog-name'
    style={{fontSize: '30px', fontWeight: 'bold'}}>
    Course List</DialogTitle>
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
            <tr onClick={handleOpenCProfile} style={{cursor: 'pointer'}}>
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
    <Button onClick={handleCloseCard} color="primary">
        cancel
    </Button>
    </DialogActions>
    </Dialog>

    <Dialog
    open={openCProfile}
    keepMounted
    onClose={handleCloseCProfile}
    maxWidth='lg'>
    <DialogTitle>
    <div className='dialog-title'>
        <h3>COURSE DETAILS</h3>
        <div className='closeIcon' onClick={handleCloseCProfile}>
        <CloseIcon/>
        </div>
    </div>
    </DialogTitle>
    <DialogContent>
    <div className='profile'>
        <div className='profile-image'>
            <img src='/images/course-profile.png' alt='image' style={{width: '300px', height: '300px'}}/>
        </div>
        <div className='profile-details'>
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
            <Button variant="contained">Syllabus</Button>
            </div>
        </div>
        </div>
    </DialogContent>
    </Dialog>
    {/* course dialog ends */}
    {/* Teacher Dialog Start */}
    <Dialog
    open={openTeacher}
    keepMounted
    onClose={handleCloseCard}
    className='dialog'
    aria-labelledby="checkout-dialog-title"
    aria-describedby="checkout-dialog-description"
    maxWidth='lg'>
        <DialogTitle>
            <h3 style={{marginBottom: '3px'}}>TEACHER LIST:</h3>
        </DialogTitle>
        <DialogContent>
            <TeacherProfile/>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleCloseCard} color='primary'>Cancel</Button>
        </DialogActions>
    </Dialog>
    {/* Teacher Dialog Ends */}
    {/* Teacher course starts */}
    <Dialog
    open={openTcourse}
    keepMounted
    onClose={handleCloseCard}
    className='dialog'
    aria-labelledby="checkout-dialog-title"
    aria-describedby="checkout-dialog-description"
    maxWidth='md'
    fullWidth
    >
    <DialogTitle className='dialog-name'
    style={{fontSize: '30px', fontWeight: 'bold'}}>
    Course List</DialogTitle>
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
            <tr onClick={handleRowClick} style={{cursor: 'pointer'}}>
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
    <Button onClick={handleCloseCard} color="primary">
        cancel
    </Button>
    </DialogActions>
    </Dialog>
    {/* Teacher course ends */}
    </>
  )
}

export default Card

{/* <div className='card-container'>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
</div> */}