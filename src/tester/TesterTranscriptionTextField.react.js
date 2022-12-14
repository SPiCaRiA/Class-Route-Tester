import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function TesterTranscriptionTextField() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m: 1, width: 750},
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Input/Output"
          multiline
          rows={10}
          defaultValue="This is a test record."
        />
      </div>
    </Box>
  );
}
