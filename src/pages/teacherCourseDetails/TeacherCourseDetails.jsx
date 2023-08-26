import React,{useState} from 'react';
import {Container, Grid,Typography } from '@mui/material';
import StudentList from './StudentList';
import './TeacherCourseDetails.css';
import CourseProgress from './CourseProgress'
import Resources from './Resources';
import ProgressBar from './ProgressBar';


const TeacherCourseDetails = () => {
    const [openStudentList, setOpenStudentList]=useState(true);
    const [openCourseProgress, setOpenCourseProgress]=useState(false);
    const handleStudentList=()=>{
        setOpenStudentList(true);
        setOpenResource(false);
        setOpenCourseProgress(false);
    }
    const [openResource, setOpenResource]=useState(false);
    const handleResource=()=>{
        setOpenResource(true);
        setOpenStudentList(false);
        setOpenCourseProgress(false);
    }
    const handleCourseProgress=()=>{
        setOpenCourseProgress(true);
        setOpenResource(false);
        setOpenStudentList(false);
    }
    // const handleFileUpload = (file) => {
    //   setPdfFile(file);
    // };
  return (
    <div className='teacher-course-details'>
        <Container>
        {openStudentList &&
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Teacher Course Panel</h5>
            <h4 onClick={handleStudentList} className={openStudentList?'teacher-active':''} style={{cursor: 'pointer'}}>Student List</h4>
            <h4 onClick={handleResource} className={openResource?'teacher-active': ''} style={{cursor: 'pointer'}}>Resources & Lessons</h4>
            <h4 onClick={handleCourseProgress} className={openCourseProgress?'teacher-active':""} style={{cursor: 'pointer'}}>
              Course Progress
            </h4>
          </Grid>
          <Grid item xs={12} md={10}>
          <h1 style={{textAlign: 'center'}}>Student List: </h1>
          <div className='studentList-table'>
             <StudentList/> 
           </div>
          </Grid>
        </Grid>
        }
        {openResource &&
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Teacher Course Panel</h5>
            <h4 onClick={handleStudentList} className={openStudentList?'teacher-active':''} style={{cursor: 'pointer'}}>Student List</h4>
            <h4 onClick={handleResource} className={openResource?'teacher-active': ''} style={{cursor: 'pointer'}}>Resources & Lessons</h4>
            <h4 onClick={handleCourseProgress} className={openCourseProgress?'teacher-active':""} style={{cursor: 'pointer'}}>
              Course Progress
            </h4>
          </Grid>
          <Grid item xs={12} md={10}>
          <h1>Resources & Lessons</h1>
            <Resources link='asdf' onFileUpload='asdf' name='asdf'/>
            <div className='course-progress'>
            <CourseProgress/>
            </div>
          </Grid>
        </Grid>
        }
        {openCourseProgress &&
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Teacher Course Panel</h5>
            <h4 onClick={handleStudentList} className={openStudentList?'teacher-active':''} style={{cursor: 'pointer'}}>Student List</h4>
            <h4 onClick={handleResource} className={openResource?'teacher-active': ''} style={{cursor: 'pointer'}}>Resources & Lessons</h4>
            <h4 onClick={handleCourseProgress} className={openCourseProgress?'teacher-active':""} style={{cursor: 'pointer'}}>
              Course Progress
            </h4>
          </Grid>
          <Grid item xs={12} md={8}>
            <h3>Assignments: </h3>
            <div className='assignment-cards'>
            <div className="assignment-card">
              <h2 className="title">title</h2>
              <p className="description">desciption</p>
              <p className="due-date">Due Date: 26/8/2023</p>
          </div>
          <div className="assignment-card">
              <h2 className="title">title</h2>
              <p className="description">desciption</p>
              <p className="due-date">Due Date: 26/8/2023</p>
          </div>
          </div>
          <button className='assignment-update-btn'>Update Assignments</button>
          </Grid>
          <Grid item xs={12} md={2}>
          <div className='course-progress'>
            <ProgressBar percentage='70' circleWidth='200'/>
          </div>
          </Grid>
        </Grid>
        }
    </Container>
    </div>
    
  )
}

export default TeacherCourseDetails