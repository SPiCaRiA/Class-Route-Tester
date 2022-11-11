/**
 * @flow strict-local
 * @author Daniel Tat
 */

import 'AnalyticsPage.react.css';

import {Grid, IconButton, InputLabel, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';

type Props = $ReadOnly<{}>;

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
              pt: '24px',
            }}>
            <Box>
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
            <Box>(Placeholder) This is where the table will go.</Box>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
