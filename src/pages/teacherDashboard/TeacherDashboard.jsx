import React from 'react';
import Card from '../../components/Card/Card';
import {Container, Grid,Typography } from '@mui/material';
import PieChart from '../../components/pieChart/PieChart';
import Calendar from '../../components/calendar/Calendar';
import NoticeBoard from '../../components/noticeBoard/NoticeBoard';
import AdminMenu from '../../components/adminMenu/AdminMenu';
import './TeacherDashboard.css';
import UpcomingLessons from '../../components/upcomingLessons/UpcomingLessons';

const TeacherDashboard = () => {
  return (
    <>
    <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            dashboard
          </Grid>

          
          <Grid item xs={12} md={7}>
          <div className='teacher-container'>
          <div className='teacher-cards'>
            <Card type='student'/>
            <Card type='course'/>
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
        </Grid>
        </Container>
    </>
  )
}


export default TeacherDashboard