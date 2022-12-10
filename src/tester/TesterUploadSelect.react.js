import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as React from 'react';

const filter = createFilterOptions();

export default function TesterUploadSelect() {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            topic: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            topic: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const {inputValue} = params;
        // Suggest the creation of a new value
        const isExisting = options.some(option => inputValue === option.topic);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            topic: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={topics}
      getOptionLabel={option => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.topic;
      }}
      renderOption={(props, option) => <li {...props}>{option.topic}</li>}
      sx={{m: 1, width: 300}}
      freeSolo
      renderInput={params => <TextField {...params} label="Enter a Topic" />}
    />
  );
}
const topics = [
  {topic: 'Math'},
  {topic: 'Pyhsics'},
  {topic: 'Chemistry'},
  {topic: 'Biology'},
];

// function remould(obj) {
//   const newData = [];
//   for (const key in obj) newData.push({topic: obj[key]});
//   return newData;
// }

// const topics = remould(obj);

// import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';
// import qs from 'qs';
// import * as React from 'react';

// const filter = createFilterOptions();

// export default function TesterUploadSelect() {
//   const [value, setValue] = React.useState(null);

//   return (
//     <Autocomplete
//       value={value}
//       onChange={(event, newValue) => {
//         if (typeof newValue === 'string') {
//           setValue({
//             topic: newValue,
//           });
//         } else if (newValue && newValue.inputValue) {
//           // Create a new value from the user input
//           setValue({
//             topic: newValue.inputValue,
//           });
//         } else {
//           setValue(newValue);
//         }
//       }}
//       filterOptions={(options, params) => {
//         const filtered = filter(options, params);

//         const {inputValue} = params;
//         // Suggest the creation of a new value
//         const isExisting = options.some(option => inputValue === option.topic);
//         if (inputValue !== '' && !isExisting) {
//           filtered.push({
//             inputValue,
//             topic: `Add "${inputValue}"`,
//           });
//         }

//         return filtered;
//       }}
//       selectOnFocus
//       clearOnBlur
//       handleHomeEndKeys
//       id="free-solo-with-text-demo"
//       options={topics}
//       getOptionLabel={option => {
//         // Value selected with enter, right from the input
//         if (typeof option === 'string') {
//           return option;
//         }
//         // Add "xxx" option created dynamically
//         if (option.inputValue) {
//           return option.inputValue;
//         }
//         // Regular option
//         return option.topic;
//       }}
//       renderOption={(props, option) => <li {...props}>{option.topic}</li>}
//       sx={{m: 1, width: 300}}
//       freeSolo
//       renderInput={params => <TextField {...params} label="Enter a Topic" />}
//     />
//   );
// }

// const topics = [
//   {topic: 'Math'},
//   {topic: 'Pyhsics'},
//   {topic: 'Chemistry'},
//   {topic: 'Biology'},
// ];

// function getTopicList() {
//   let v = [];
//   axios.get('http://127.0.0.1:5000/api/tlist'['status: 0']).then(response => {
//     v = response.data;
//   });
//   return v;
// }

// const topics = getTopicList();

// import {Grid, IconButton, InputLabel} from '@mui/material';
// import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
// import FormControl from '@mui/material/FormControl';
// import MenuItem from '@mui/material/MenuItem';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Select from '@mui/material/Select';
// import {useTheme} from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import {createGrid} from '@mui/system';
// import axios from 'axios';
// import qs from 'qs';
// import * as React from 'react';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// //http://127.0.0.1:5000/api/tlist
// const topics = ['Math', 'Pyhsics', 'Chemistry', 'Biology'];

// function getStyles(topic, personTopic, theme) {
//   return {
//     fontWeight:
//       personTopic.indexOf(topic) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function TesterUploadSelect() {
//   const theme = useTheme();
//   const [personTopic, setPersonTopic] = React.useState([]);

//   const handleChange = event => {
//     const {
//       target: {value},
//     } = event;
//     setPersonTopic(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{m: 1, width: 300}}>
//         <InputLabel id="demo-simple-select-labe">Enter a Topic</InputLabel>
//         <Select
//           labelId="demo-simple-select-labe"
//           id="demo-simple-topic"
//           simple
//           value={personTopic}
//           onChange={handleChange}
//           input={<OutlinedInput label="Enter a Topic" />}
//           MenuProps={MenuProps}>
//           {topics.map(topic => (
//             <MenuItem
//               key={topic}
//               value={topic}
//               style={getStyles(topic, personTopic, theme)}>
//               {topic}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
