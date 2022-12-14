/* eslint-disable no-console */
import {InputLabel} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as React from 'react';

async function fetchTopicList() {
  return axios
    .get('http://127.0.0.1:5000/api/tlist')
    .then(res => res.data)
    .catch(err => console.log(err));
}

const dataFetch = () => {
  const topicPromise = fetchTopicList;
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
      } else if (status === 'success') {
        return result;
      } else {
        throw result;
      }
    },
  };
};

const resource = dataFetch();

TopicSelect.propTypes = {
  topicsOnChange: PropTypes.func,
};

export default function TopicSelect({topicsOnChange}) {
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
        <Select label="Topics" onChange={topicsOnChange}>
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
}

export function getTopicsList() {
  const t = resource.topics.read();
  return t.topics;
}
