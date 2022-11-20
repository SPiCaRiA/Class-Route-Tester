import TesterRatingScore from './TesterRatingScore.react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function TesterReportDialoge() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

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
        <DialogTitle id="scroll-dialog-title">Report a Problem</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          {/* <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Write down any problems you encountered`,
              )
              .join('\n')}
          </DialogContentText> */}
          <div>Give a rating on the result:</div>
          <div>
            <TesterRatingScore></TesterRatingScore>
          </div>
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
              />
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>SEND</Button>
          <Button onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
