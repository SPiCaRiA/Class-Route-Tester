/**
 * @flow strict-local
 * @author Daniel Tat
 */

import AnalyticsErrorAlert from 'AnalyticsErrorAlert.react';
import AnalyticsHeader from 'AnalyticsHeader.react';
import AnalyticsMainCard from 'AnalyticsMainCard.react';

import {Collapse} from '@mui/material';
import Container from '@mui/material/Container';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import {useCallback, useState} from 'react';
import * as React from 'react';

type Props = $ReadOnly<{}>;

export default function AnalyticsPage(_props: Props): React.MixedElement {
  const [open, setOpen] = useState(false);

  return (
    <ScopedCssBaseline>
      <Collapse in={open}>
        <AnalyticsErrorAlert
          closeButtonOnClick={useCallback(() => {
            setOpen(false);
          })}
        />
      </Collapse>
      <Container>
        <AnalyticsHeader />
        <AnalyticsMainCard
          searchButtonOnClick={useCallback(() => {
            setOpen(true);
          })}
        />
      </Container>
    </ScopedCssBaseline>
  );
}
