import { Dialog,DialogTitle,DialogContent,DialogActions} from '@mui/material'
import { useState } from 'react';
import React from "react";
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

export const ActionButton = ({
  dialogTitle,
  dialogContent,
  actionButton,
  dialogAction,
  actionButton_color,
  close,
  // dialogActionContainer,
  handleClose
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton variant="text" onClick={handleClickOpen}
      color={actionButton_color}
      >
        {actionButton}
      </IconButton>
      <Dialog
        className='dialog_box'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='dialog_header'>

        <DialogTitle id="alert-dialog-title">{dialogTitle} </DialogTitle>
        {close &&<IconButton variant='contained' onClick={handleCancel}><Cancel style={{color:'#d32f2f'}}/> </IconButton>}
        </div>
        
        <DialogContent>
          
            {dialogContent}
          
        </DialogContent>
        {dialogAction &&
        <DialogActions>
          
          
          <IconButton variant="contained" color={actionButton_color} onClick={handleClose} autoFocus>
            {dialogAction}
          </IconButton>
          
        </DialogActions>
}
      </Dialog>
    </>
  );
};
