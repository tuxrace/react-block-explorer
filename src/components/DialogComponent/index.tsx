/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  open: boolean
  onClose: () => void
  title: string
  content: string
}

const DialogComponent = (props: Props) => {
  const { open, onClose, title, content } = props
  
    return <Dialog
    open={open}
    onClose={onClose}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary" autoFocus>
        Please try Again
      </Button>
    </DialogActions>
  </Dialog>
}

export default DialogComponent
