import AnalyticsFilter from './AnalyticsFilter.react';
import AnalyticsTable from './AnalyticsTable.react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import * as React from 'react';

AnalyticsMainCard.propTypes = {
  searchButtonOnClick: PropTypes.func,
};

export default function AnalyticsMainCard({searchButtonOnClick}) {
  return (
    <Box
      sx={{
        height: '991px',
        width: '1152px',
        mt: '48px',
        pt: '24px',
        px: '24px',
      }}>
      <Card
        sx={{
          bgcolor: '#FFFFFF',
          textAlign: 'center',
          borderRadius: '2px',
          height: '900px',
          mx: '24px',
          px: '24px',
        }}>
        <AnalyticsFilter searchButtonOnClick={searchButtonOnClick} />
        <Divider>RESULTS</Divider>
        <Box sx={{my: '24px'}}>
          <AnalyticsTable />
        </Box>
      </Card>
    </Box>
  );
}
