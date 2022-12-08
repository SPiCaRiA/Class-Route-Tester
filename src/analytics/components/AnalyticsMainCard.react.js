/* eslint-disable no-console */
import AnalyticsFilter from './AnalyticsFilter.react';
import AnalyticsTable from './AnalyticsTable.react';
import {getTopicsList} from './AnalyticsTopicSelect.react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import {useState} from 'react';
import * as React from 'react';

AnalyticsMainCard.propTypes = {
  openError: PropTypes.func,
};

export default function AnalyticsMainCard({openError}) {
  const [phases, setPhases] = useState([2, 3]);
  const [topics, setTopics] = useState(getTopicsList());
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);

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
        <AnalyticsFilter
          setPhaseParams={setPhases}
          setTopicParams={setTopics}
          setRatingParams={setRatings}
        />
        <Divider>RESULTS</Divider>
        <Box sx={{my: '24px'}}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <AnalyticsTable
              phaseParams={phases}
              topicParams={topics}
              ratingParams={ratings}
            />
          </React.Suspense>
        </Box>
      </Card>
    </Box>
  );
}
