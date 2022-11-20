import TesterTranscriptionTextField from './TesterTranscriptionTextField.react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function TesterTranscriptionCard() {
  return (
    <Card sx={{maxWidth: 800}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Transcribed Text After Grammar Check
          <TesterTranscriptionTextField></TesterTranscriptionTextField>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Rerun1</Button>
        <Button size="small">Report</Button>
      </CardActions>
    </Card>
  );
}
