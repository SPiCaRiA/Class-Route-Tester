/**
 * @flow strict-local
 * @author Daniel Tat
 */

import {Grid, IconButton, InputLabel, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

type Props = $ReadOnly<{}>;

function createData(
  time: string,
  topic: string,
  phase: string,
  rating: string,
  details: string,
) {
  return {time, topic, phase, rating, details};
}

const rows = [
  createData(
    'Sun Oct 09 2022 23:09:47',
    'Mathematics',
    'Translation',
    '3',
    'Lorem',
  ),
  createData(
    'Sun Oct 09 2022 23:09:47',
    'Computer Science',
    'Grammar Check',
    '5',
    'Lorem ipsum',
  ),
  createData(
    'Sun Oct 09 2022 23:09:47',
    'Physics',
    'Translation',
    '4',
    'Lorem ipsum',
  ),
];

export default function AnalyticsPage(_props: Props): React.MixedElement {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            height: '58px',
            width: '1152px',
            mt: '24px',
            py: '24px',
            px: '24px',
          }}>
          <Typography variant="h4" fontWeight="400">
            ClassRoute Tester
          </Typography>
        </Box>
        <Box
          sx={{
            height: '991px',
            width: '1152px',
            mt: '48px',
            pt: '24px',
            px: '24px',
          }}>
          <Card
            sx={{
              bgcolor: '#FFFFFF',
              textAlign: 'center',
              borderRadius: '2px',
              height: '900px',
              mx: '24px',
              px: '24px',
            }}>
            <Box sx={{my: '24px'}}>
              <Grid container spacing={1}>
                <Grid item xs={4.5}>
                  <FormControl fullWidth>
                    <InputLabel id="phases-select">Phases</InputLabel>
                    <Select label="Phases">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Translation'}>Translation</MenuItem>
                      <MenuItem value={'Grammer'}>Grammar</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4.5}>
                  <FormControl fullWidth>
                    <InputLabel id="topic-select">Topics</InputLabel>
                    <Select label="Topics">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'Physics'}>Physics</MenuItem>
                      <MenuItem value={'Mathematics'}>Mathematics</MenuItem>
                      <MenuItem value={'Computer Science'}>
                        Computer Science
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <FormControl fullWidth>
                    <InputLabel id="rating-select">Ratings</InputLabel>
                    <Select label="Ratings">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={1}>
                  <IconButton>
                    <Button variant="contained">(PLACEHOLDER)</Button>
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Divider>RESULTS</Divider>
            <Box sx={{my: '24px'}}>
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
            </Box>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
