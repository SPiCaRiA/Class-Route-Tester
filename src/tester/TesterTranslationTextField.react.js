import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function TesterTranslationTextField() {
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
          label="Output"
          multiline
          rows={10}
          defaultValue="这是一条测试记录。"
        />
      </div>
    </Box>
  );
}
