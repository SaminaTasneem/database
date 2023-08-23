import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader,
} from '@mui/material';
import './AdminMenu.css';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CircleIcon from '@mui/icons-material/Circle';


const AdminMenu = (props) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListSubheader component="div" id="nested-list-subheader">
        Admin Panel
      </ListSubheader>
      <ListItemButton
        component={NavLink}
        to="/admin/status"
      >
        <ListItemIcon>
          <img src='/images/status-logo.png' alt='' className='adminmenu-image'/>
        </ListItemIcon>        
        <ListItemText primary="Status" className={
            (props.type==='status')?'active':''
        }/>
        
      </ListItemButton>

      <ListItemButton
        component={NavLink}
        to="/admin/profile"
      >
        <ListItemIcon className='adminmenu-icon'>
        <PermContactCalendarIcon color='primary'/>
        </ListItemIcon>
        <ListItemText primary="Profile details" className={
            (props.type==='profile')?'active':''
        }/>
      </ListItemButton>

      
      </List>
  )
}

export default AdminMenu