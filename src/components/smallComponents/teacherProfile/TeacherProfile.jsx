import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import './TeacherProfile.css';

interface Column {
  id: 'image' | 'name' | 'designation' | 'email' | 'phone';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'image', label: 'Image', minWidth: 100},
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'designation', label: 'Designation', minWidth: 100},
  { id: 'email', label: 'Email', minWidth: 200},
  { id: 'phone', label: 'Phone', minWidth: 100}
];

interface Data {
  image: image;
  name: string;
  designation: string;
  email: number;
  phone: number;
  // density: number;
}

function createData(
  image,name,designation,email,phone
): Data {
  return { image, name, designation, email, phone };
}

const rows = [
  createData('image','S M Mesbahul Islam', 'swipper', 'mesbahulislam676@gmail.com', '01987654321'),
  createData('image','S M Mesbahul Islam', 'swipper', 'mesbahulislam676@gmail.com', '01987654321'),
  createData('image','S M Mesbahul Islam', 'swipper', 'mesbahulislam676@gmail.com', '01987654321'),
  createData('image','S M Mesbahul Islam', 'swipper', 'mesbahulislam676@gmail.com', '01987654321'),
  createData('image','S M Mesbahul Islam', 'swipper', 'mesbahulislam676@gmail.com', '01987654321'),
  createData('image','S M Mesbahul Islam', 'swipper', 'mesbahulislam676@gmail.com', '01987654321'),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openTProfile, setOpenTProfile]=React.useState(false);

  const handleOpenTProfile = () => {
    setOpenTProfile(true);
  }
  const handleCloseTProfile = () => {
    setOpenTProfile(false);
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {/* <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow> */}
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={handleOpenTProfile} style={{cursor: 'pointer'}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog 
      open={openTProfile}
      keepMounted
      onClose={handleCloseTProfile}
      maxWidth='lg'
      fullWidth>
        <DialogTitle>
        <div className='teacher-title'>
        Teacher Details
        </div>
        </DialogTitle>
        <DialogContent>
        <div className='teacher-profile'>
            <div className='teacher-image'>
                <img src='/images/teacher-profile.png' alt='teacher image'/>
            </div>
            <div className='teacher-details'>

            <span className='left-side'>Name </span><span className='right-side'>S M Mesbahul Islam</span><br/>
            <span className='left-side'>Email: </span><span className='right-side'>mesbahulislam676@gmail.com</span><br/>
            <span className='left-side'>Phone: </span><span className='right-side'>01890036601</span><br/>
            <span className='left-side'>Gender: </span><span className='right-side'>Male</span><br/>
            <span className='left-side'>Date of Birth: </span><span className='right-side'>mone nai, sorry</span><br/>
            <span className='left-side'>Address: </span><span className='right-side'>Kono 1ta nodite</span><br/>
            <span className='left-side'>Designation: </span><span className='right-side'>swipper</span><br/>
            <span className='left-side'>Office Location: </span><span className='right-side'>patale</span><br/>

            </div>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTProfile} color='primary'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
