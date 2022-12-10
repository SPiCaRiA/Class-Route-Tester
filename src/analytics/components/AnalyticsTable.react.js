/* eslint-disable no-console */
import {getTopicsList} from './AnalyticsTopicSelect.react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import * as React from 'react';

async function fetchReports() {
  const topics = getTopicsList();
  return axios
    .get('http://127.0.0.1:5000/api/reports/request/', {
      params: {
        topics: topics,
        phases: [2, 3],
        ratings: [1, 2, 3, 4, 5],
      },
      paramsSerializer: {
        indexes: null,
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
}

const dataFetch = () => {
  const promise = fetchReports;
  return {
    reports_matched: wrapPromise(promise),
  };
};

const wrapPromise = promise => {
  let status = 'pending';
  let result;
  const suspend = promise().then(
    res => {
      status = 'success';
      result = res;
    },
    err => {
      status = 'error';
      result = err;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspend;
      } else if (status === 'success') {
        return result;
      } else {
        throw result;
      }
    },
  };
};

const resource = dataFetch();

export default function AnalyticsTable() {
  const reports = resource.reports_matched.read();
  const reportsData = [];
  reports['reports matched'].forEach(element => {
    let convertedPhase = 1;
    if (element.phase == 2) convertedPhase = 'Translation';
    else if (element.phase == 3) convertedPhase = 'Grammar';
    reportsData.push({
      time: element.time,
      topic: element.topic,
      phase: convertedPhase,
      rating: element.rating,
      details: element.details,
    });
  });

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
          {reportsData.map(row => (
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
