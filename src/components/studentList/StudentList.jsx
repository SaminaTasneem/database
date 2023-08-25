import React from 'react';
import {Container, Grid,Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './StudentList.css';

function createData(
    ID,
    name,
    email,
    phone,
  ) {
    return {
      ID,
      name,
      email,
      phone,      
      history: [
        {
          tt1: '12',
          tt2: '12',
          assignment1: '12',
          assignment2: '12',
          final: '12',
        }
      ],
    };
  }
  
  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.ID}
          </TableCell>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.phone}</TableCell>
          {/* <TableCell align="right">{row.protein}</TableCell> */}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>TT1</TableCell>
                      <TableCell>TT2</TableCell>
                      <TableCell>Assignment1</TableCell>
                      <TableCell>Assignment2</TableCell>
                      <TableCell>Final</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow>
                        <TableCell>
                          {historyRow.tt1}
                        </TableCell>
                        <TableCell>{historyRow.tt2}</TableCell>
                        <TableCell>{historyRow.assignment1}</TableCell>
                        <TableCell>{historyRow.assignment2}</TableCell>
                        <TableCell>{historyRow.final}</TableCell>
                        <TableCell><button className='student-marks-update'>Update</button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  const rows = [
   
    createData('2019331098', 'Samina Tasneem', 'samina@gmail.com', '01826700175'),
    createData('2019331098', 'Samina Tasneem', 'samina@gmail.com', '01826700175'),
    createData('2019331098', 'Samina Tasneem', 'samina@gmail.com', '01826700175'),
    createData('2019331098', 'Samina Tasneem', 'samina@gmail.com', '01826700175'),
    createData('2019331098', 'Samina Tasneem', 'samina@gmail.com', '01826700175'),
    createData('2019331098', 'Samina Tasneem', 'samina@gmail.com', '01826700175'),
  ];
  const StudentList=()=>{
    return(
    <div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Phone number</TableCell>
            {/* <TableCell align="right"></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
  }

  export default StudentList;