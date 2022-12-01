/* eslint-disable no-console */
import {Grid, IconButton, InputLabel} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as React from 'react';

AnalyticsFilter.propTypes = {
  searchButtonOnClick: PropTypes.func,
};

async function getTopicList() {
  return axios
    .get('http://127.0.0.1:5000/api/tlist')
    .then(res => res.data)
    .catch(err => console.log(err));
}

const dataFetch = () => {
  const topicPromise = getTopicList;
  return {
    topics: wrapPromise(topicPromise),
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
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

const resource = dataFetch();

const TopicList = () => {
  const t = resource.topics.read();
  const menuItems = t.topics.map(item => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="topic-select">Topics</InputLabel>
        <Select label="Topics">{menuItems}</Select>
      </FormControl>
    </div>
  );
};

export default function AnalyticsFilter({searchButtonOnClick}) {
  return (
    <Box sx={{my: '24px'}}>
      <Grid container spacing={1}>
        <Grid item xs={4.5}>
          <FormControl fullWidth>
            <InputLabel id="phases-select">Phases</InputLabel>
            <Select label="Phases">
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
              <TopicList />
            </React.Suspense>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="rating-select">Ratings</InputLabel>
            <Select label="Ratings">
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
