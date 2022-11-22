import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

// TODO: REMOVE WHEN IMPLEMENTING DATA FETCH FROM BACKEND
const rows = [
  {
    time: 'Sun Oct 09 2022 23:09:47',
    topic: 'Mathematics',
    phase: 'Translation',
    rating: '3',
    details: 'Lorem',
  },
  {
    time: 'Sun Oct 09 2022 23:09:47',
    topic: 'Computer Science',
    phase: 'Grammar Check',
    rating: '5',
    details: 'Lorem ipsum',
  },
  {
    time: 'Sun Oct 09 2022 23:09:47',
    topic: 'Physics',
    phase: 'Translation',
    rating: '4',
    details: 'Lorem ipsum',
  },
];

export default function AnalyticsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Topic</TableCell>
            <TableCell>Phase</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.time}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell>{row.topic}</TableCell>
              <TableCell>{row.phase}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
