import React from 'react';
import Card from '../../components/Card/Card';
import './AdminStatus.css';
import {Container, Grid,Typography } from '@mui/material';
import PieChart from '../../components/pieChart/PieChart';
import Calendar from '../../components/calendar/Calendar';
import NoticeBoard from '../../components/noticeBoard/NoticeBoard';
import AdminMenu from '../../components/adminMenu/AdminMenu';

const AdminStatus = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <AdminMenu type='status'/>
          </Grid>

          
          <Grid item xs={12} md={9}>
          <div className='status-container'>
          <div className='Cards'>
            <Card type='student'/>
            <Card type='course'/>
            <Card type='teacher'/>
          </div>
          <div className='pie-calendar'>
          <div className='pie'>
            <PieChart/>
            </div>
          <div className='calendar'>
          
          <Calendar className='calendar'/>
            </div>
          </div>
          </div>
          
          <NoticeBoard/>
          </Grid>
        </Grid>
        </Container>
    </>
  )
}


export default AdminStatus