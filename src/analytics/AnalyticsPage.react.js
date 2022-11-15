/**
 * @flow strict-local
 * @author Daniel Tat
 */

import Container from '@mui/material/Container';
import * as React from 'react';

import AnalyticsHeader from './components/AnalyticsHeader.react';
import MainCard from './components/AnalyticsMainCard.react';

type Props = $ReadOnly<{}>;

export default function AnalyticsPage(_props: Props): React.MixedElement {
  return (
    <Container>
      <AnalyticsHeader></AnalyticsHeader>
      <MainCard></MainCard>
    </Container>
  );
}
