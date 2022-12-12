import TesterRatingScore from './TesterRatingScore.react';
import TesterReportErrorAlert from './TesterReportErrorAlert.react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import * as React from 'react';

export default function TesterReportDialoge() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const [posts, setPosts] = useState([]);
  const [topic, setTopic] = useState('');
  const [phase, setPhase] = useState(0);
  const [rating, setRating] = useState(0);
  const [details, setDetails] = useState('');

  const handleChangeDetails = event => {
    setDetails(event.target.value);
  };

  // ... Fetch posts here

  // Handle psosts request
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/api/reports/store', {
      method: 'POST',
      body: JSON.stringify({
        topic: topic,
        phase: phase,
        rating: rating,
        details: details,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(post => {
        setPosts(posts => [post, ...posts]);
        setTopic('Bio');
        setPhase(2);
        setRating(4);
        setDetails(details);
      })
      .catch(err => {
        console.log(err.message);
      });
    setOpen(false);
  };

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>REPORT</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        {/* <TesterReportErrorAlert /> */}
        <DialogTitle id="scroll-dialog-title">Report a Problem</DialogTitle>
        <DialogContent>
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}>
            <div>Give a rating on the result:</div>
            <div>
              <TesterRatingScore></TesterRatingScore>
            </div>
          </Grid>
          <div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': {m: 1, width: '60ch'},
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-textarea"
                placeholder="Write down any problems you encountered"
                multiline
                rows={6}
                value={details}
                onChange={handleChangeDetails}
              />
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>SEND</Button>
          <Button onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
