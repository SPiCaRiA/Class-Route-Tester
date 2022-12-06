/* eslint-disable no-console */
import TopicSelect from './AnalyticsTopicSelect.react';

import {Grid, IconButton, InputLabel} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import * as React from 'react';

AnalyticsFilter.propTypes = {
  searchButtonOnClick: PropTypes.func,
};

export default function AnalyticsFilter({searchButtonOnClick}) {
  return (
    <Box sx={{my: '24px'}}>
      <Grid container spacing={1}>
        <Grid item xs={4.5}>
          <FormControl fullWidth>
            <InputLabel id="phases-select">Phases</InputLabel>
            <Select label="Phases">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Translation">Translation</MenuItem>
              <MenuItem value="Grammar">Grammar</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4.5}>
          <FormControl fullWidth>
            <React.Suspense
              fallback={
                <Box>
                  <InputLabel id="topic-select">Topics</InputLabel>
                  <Select label="Topics">
                    <MenuItem value="Loading...">Loading...</MenuItem>
                  </Select>
                </Box>
              }>
              <TopicSelect />
            </React.Suspense>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="rating-select">Ratings</InputLabel>
            <Select label="Ratings">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <Button variant="contained" onClick={searchButtonOnClick}>
              (PLACEHOLDER)
            </Button>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
