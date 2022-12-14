/* eslint-disable no-console */
import TopicSelect from './AnalyticsTopicSelect.react';

import SearchIcon from '@mui/icons-material/Search';
import {Grid, IconButton, InputLabel} from '@mui/material';
import Box from '@mui/material/Box';
import {blue} from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import * as React from 'react';

AnalyticsFilter.propTypes = {
  setPhaseParams: PropTypes.func,
  setTopicParams: PropTypes.func,
  setRatingParams: PropTypes.func,
};

export default function AnalyticsFilter(props) {
  const phasesOnChange = event => {
    props.setPhaseParams(event.target.value);
  };
  const topicsOnChange = event => {
    props.setTopicParams(event.target.value);
  };
  const ratingsOnChange = event => {
    props.setRatingParams(event.target.value);
  };

  return (
    <Box sx={{my: '24px'}}>
      <Grid container spacing={1}>
        <Grid item xs={4.5}>
          <FormControl fullWidth>
            <InputLabel id="phases-select">Phases</InputLabel>
            <Select label="Phases" onChange={phasesOnChange}>
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
              <TopicSelect topicsOnChange={topicsOnChange} />
            </React.Suspense>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="rating-select">Ratings</InputLabel>
            <Select label="Ratings" onChange={ratingsOnChange}>
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
            <SearchIcon sx={{color: blue[500], fontSize: 40}} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
