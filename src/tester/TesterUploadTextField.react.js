import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function TesterUploadTextField() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m: 1, width: '60ch'},
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Input"
          multiline
          rows={5}
          defaultValue="Default Value"
        />
      </div>
    </Box>
  );
}
