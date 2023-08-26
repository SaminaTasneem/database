import React,{useState} from 'react';
import {Container, Grid,Typography } from '@mui/material';
import StudentStepper from './StudentStepper';
import StudentProgressBar from './StudentProgressBar';


const StudentCourseDetails = ({ onFileUpload,name,link }) => {
//   const [openCourseDetails, setOpenCourseDetails]=useState(true);
  const [openMaterials, setOpenMaterials]=useState(true);
//   const [openAssignments, setOpenAssignments]=useState(false);
//   const handleCourseDetails=()=>{
    // setOpenCourseDetails(true);
    // setOpenMaterials(false);
    // setOpenAssignments(false);
//   }
  const handleMaterials=()=>{
    // setOpenCourseDetails(false);
    setOpenMaterials(true);
    // setOpenAssignments(false);
  }
//   const handleAssignments=()=>{
//     setOpenCourseDetails(false);
//     setOpenMaterials(false);
//     setOpenAssignments(true);
//   }
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      setSelectedFile(null);
    }
  };
  
  return (
    <div className='student-course-details'>
    <Container>
    {/* {openCourseDetails &&
       <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Student Panel</h5>
            <h6 onClick={handleCourseDetails}>Course details</h6>
            <h6 onClick={handleMaterials}>Materials</h6>
            {/* <h6 onClick={handleAssignments}>Assignments</h6> */}
          {/* </Grid>
          <Grid item xs={12} md={10}>
                Course Details
          </Grid>
        </Grid> */}
    {/* } */} 
    {openMaterials &&
       <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Student Panel</h5>
            {/* <h6 onClick={handleCourseDetails}>Course details</h6> */}
            <h6>Materials</h6>
            {/* <h6 onClick={handleAssignments}>Assignments</h6> */}
          </Grid>
          <Grid item xs={12} md={5}>
            <div className='materials'>
                <a href='#' target="_blank" rel="noopener noreferrer">
                    Resource Link
                </a>
                <div className='file'>
                    <button>Syllabus</button>
                </div>
                <div className='book'>
                    Book Name: name
                </div>
            </div>
            <div className='student-stepper'>
            <StudentStepper/>
            </div>
            
          </Grid>
          <Grid item xs={12} md={5}>
          <div className='student-progress-bar'>
          <StudentProgressBar percentage='70' circleWidth='200'/>
          </div>
          <div className='upload-assignment'>
            <h4>Upload Assignment 1</h4>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
          </div>
          <div className='upload-assignment'>
            <h4>Upload Assignment 2</h4>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
          </div>
            </Grid>
        </Grid>
    }
    {/* {openAssignments &&
       <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Student Panel</h5>
            <h6 onClick={handleCourseDetails}>Course details</h6>
            <h6 onClick={handleMaterials}>Materials</h6>
            <h6 onClick={handleAssignments}>Assignments</h6>
          </Grid>
          <Grid item xs={12} md={10}>
                Assignments
          </Grid>
        </Grid>
    } */}
    </Container>
    </div>
  )
}

export default StudentCourseDetails