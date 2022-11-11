/**
 * @flow strict-local
 * @author Daniel Tat
 */

import 'AnalyticsPage.react.css';

import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import * as React from 'react';

type Props = $ReadOnly<{}>;

//const [phase] = React.useState('');

export default function AnalyticsPage(_props: Props): React.MixedElement {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            height: '58px',
            width: '1152px',
            mt: '24px',
            px: '24px',
          }}>
          <Typography variant="h4" fontWeight="400">
            ClassRoute Tester
          </Typography>
        </Box>
        <Box
          sx={{
            height: '991px',
            width: '1152px',
            mt: '24px',
            pt: '24px',
            px: '24px',
          }}>
          <Card
            sx={{
              bgcolor: '#FFFFFF',
              textAlign: 'center',
              borderRadius: '2px',
              mx: '24px',
              px: '24px',
            }}>
            <Box>(Placeholder) This is where the filter will go.</Box>
            <Divider>RESULTS</Divider>
            <Box>(Placeholder) This is where the table will go.</Box>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
