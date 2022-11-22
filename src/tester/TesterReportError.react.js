import {Button, Collapse, IconButton} from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import {Box} from '@mui/system';
import * as React from 'react';

export default function TesterReportError() {
  const [open, setOpen] = React.useState(false);

  function openError() {
    setOpen(true);
  }

  return (
    <Box>
      <Collapse in={open}>
        <Stack sx={{width: '50%'}} spacing={2}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}>
                X
              </IconButton>
            }>
            <AlertTitle>Error</AlertTitle>
            Failed to fetch results.
          </Alert>
        </Stack>
      </Collapse>
      <Button onClick={openError}>Trigger Error Alert</Button>
    </Box>
  );
}