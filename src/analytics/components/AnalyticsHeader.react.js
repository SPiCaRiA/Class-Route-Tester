import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function AnalyticsHeader() {
  return (
    <Box
      sx={{
        height: '58px',
        width: '1152px',
        mt: '24px',
        py: '24px',
        px: '24px',
      }}>
      <Typography variant="h4" fontWeight="400">
        ClassRoute Tester
      </Typography>
    </Box>
  );
}
