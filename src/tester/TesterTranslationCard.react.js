import TesterReportDialog from './TesterReportDialog.react';
import TesterTranslationTextField from './TesterTranslationTextField.react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function TesterTranslationCard() {
  return (
    <Card sx={{maxWidth: 800}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Translation
          <TesterTranslationTextField></TesterTranslationTextField>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Rerun</Button>
        <TesterReportDialog size="small">REPORT</TesterReportDialog>
      </CardActions>
    </Card>
  );
}
