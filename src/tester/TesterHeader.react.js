import TesterUploadDialog from './TesterUploadDialog.react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function TesterHeader() {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Toolbar
        sx={{
          m: 1,
          width: 1000,
        }}>
        <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
          ClassRoute Tester
        </Typography>
        {/* <Button color="inherit">UPLOAD VIDEO</Button> */}
        <TesterUploadDialog color="red">UPLOAD VIDEO</TesterUploadDialog>
      </Toolbar>
    </Box>
  );
}
