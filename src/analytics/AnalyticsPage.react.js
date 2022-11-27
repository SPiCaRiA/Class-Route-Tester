/**
 * @flow strict-local
 * @author Daniel Tat
 */

import AnalyticsHeader from 'AnalyticsHeader.react';
import MainCard from 'AnalyticsMainCard.react';

import Container from '@mui/material/Container';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import * as React from 'react';

import AnalyticsErrorAlert from './components/AnalyticsErrorAlert.react';

type Props = $ReadOnly<{}>;

export default function AnalyticsPage(_props: Props): React.MixedElement {
  return (
    <ScopedCssBaseline>
      <Container>
        <AnalyticsHeader />
        <MainCard />
      </Container>
    </ScopedCssBaseline>
  );
}
