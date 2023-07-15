import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogPopupAuthoriz({popups}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Авторизация</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите почту:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => {
            handleClose();
            const valueInputMail = e.target.parentNode.parentNode.children[1].children[1].children[1].children[0].value;
            localStorage.setItem('token', valueInputMail);
            popups(false);
          }}>Войти</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}