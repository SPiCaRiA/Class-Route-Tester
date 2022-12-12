import TesterUploadErrorAlert from './TesterUploadErrorAlert.react';
import TesterUploadSelect from './TesterUploadSelect.react';
import TesterUploadTextField from './TesterUploadTextField.react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function TesterUploadDialog() {
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
      <Button onClick={handleClickOpen('paper')}>UPLOAD VIDEO</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        {/* <TesterUploadErrorAlert /> */}
        <DialogTitle id="scroll-dialog-title">Upload Video</DialogTitle>
        <DialogContent>
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}>
            <div>
              <TesterUploadTextField></TesterUploadTextField>
            </div>
          </Grid>
          <div>
            <TesterUploadSelect></TesterUploadSelect>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CONFIRM</Button>
          <Button onClick={handleClose}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
