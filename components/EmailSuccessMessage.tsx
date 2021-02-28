import React from 'react';
import { Snackbar } from '@material-ui/core';

interface EmailSuccessMessageProps {
  senderFirstName: string;
  displayMessage: boolean;
  setDisplayMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EmailSuccessMessage({
  senderFirstName,
  displayMessage,
  setDisplayMessage,
}: EmailSuccessMessageProps) {
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setDisplayMessage(false);
  };

  return (
    <Snackbar
      open={displayMessage}
      onClose={handleClose}
      autoHideDuration={4000}
      message={`Thanks ${senderFirstName}, I'll be in touch soon.`}
    />
  );
}
