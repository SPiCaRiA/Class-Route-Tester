import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const filter = createFilterOptions();

export default function TesterUploadSelect() {
  const [value, setValue] = React.useState(null);
  const [posts, setPosts] = React.useState([]);

  function getData() {
    fetch('http://127.0.0.1:5000/api/tlist').then(async fetchedPosts => {
      const postsAsJson = await fetchedPosts.json();
      setPosts(postsAsJson.topics);
    });
  }

  React.useEffect(() => {
    getData();
    const pollForData = setInterval(() => getData(), 5000);
    return () => {
      clearTimeout(pollForData);
    };
  }, []);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue(newValue);
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue(newValue.inputValue);
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const {inputValue} = params;
        // Suggest the creation of a new value
        const isExisting = options.some(option => inputValue === option);
        if (inputValue !== '' && !isExisting) {
          filtered.push(`Add "${inputValue}"`);
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="select-a-topic"
      options={posts}
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
        return option;
      }}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      sx={{m: 1, width: 300}}
      freeSolo
      renderInput={params => <TextField {...params} label="Selec a Topic" />}
    />
  );
}
