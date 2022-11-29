import {IconButton} from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import * as React from 'react';

AnalyticsErrorAlert.propTypes = {
  closeButtonOnClick: PropTypes.func,
};

export default function AnalyticsErrorAlert({closeButtonOnClick}) {
  return (
    <Box>
      <Stack sx={{pt: '8px'}} alignItems="center" spacing={2}>
        <Alert
          sx={{py: '20px', px: '32px'}}
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={closeButtonOnClick}>
              X
            </IconButton>
          }>
          <AlertTitle>Error</AlertTitle>
          Failed to fetch results.
        </Alert>
      </Stack>
    </Box>
  );
}
