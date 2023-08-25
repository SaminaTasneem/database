import React,{useState} from 'react';
import {Container, Grid,Typography } from '@mui/material';
import StudentList from '../../components/studentList/StudentList';
import './TeacherCourseDetails.css';
import CourseProgress from '../../components/courseProgress/CourseProgress'


const TeacherCourseDetails = () => {
    const [openStudentList, setOpenStudentList]=useState(true);
    const handleStudentList=()=>{
        setOpenStudentList(true);
        setOpenResource(false);
    }
    const [openResource, setOpenResource]=useState(false);
    const handleResource=()=>{
        setOpenResource(true);
        setOpenStudentList(false);
    }
  return (
    <div className='teacher-course-details'>
        <Container>
        {openStudentList &&
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <h5>Teacher Course Panel</h5>
            <h4 onClick={handleStudentList} className={openStudentList?'active':''}>Student List</h4>
            <h4 onClick={handleResource} className={openResource?'active': ''}>Resources & Lessons</h4>
          </Grid>
          <Grid item xs={12} md={10}>
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
            <h4 onClick={handleStudentList} className={openStudentList?'active':''}>Student List</h4>
            <h4 onClick={handleResource} className={openResource?'active': ''}>Resources & Lessons</h4>
          </Grid>
          <Grid item xs={12} md={10}>
            <CourseProgress/>
          </Grid>
        </Grid>
        }
    </Container>
    </div>
    
  )
}

export default TeacherCourseDetails