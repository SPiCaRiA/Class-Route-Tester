import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import {useTheme} from '@mui/material/styles';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const topics = ['Math', 'Pyhsics', 'Chemistry', 'Biology'];

function getStyles(topic, personTopic, theme) {
  return {
    fontWeight:
      personTopic.indexOf(topic) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TesterUploadSelect() {
  const theme = useTheme();
  const [personTopic, setPersonTopic] = React.useState([]);

  const handleChange = event => {
    const {
      target: {value},
    } = event;
    setPersonTopic(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{m: 1, width: 300}}>
        <InputLabel id="demo-simple-select-labe">Enter a Topic</InputLabel>
        <Select
          labelId="demo-simple-select-labe"
          id="demo-simple-topic"
          simple
          value={personTopic}
          onChange={handleChange}
          input={<OutlinedInput label="Enter a Topic" />}
          MenuProps={MenuProps}>
          {topics.map(topic => (
            <MenuItem
              key={topic}
              value={topic}
              style={getStyles(topic, personTopic, theme)}>
              {topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
