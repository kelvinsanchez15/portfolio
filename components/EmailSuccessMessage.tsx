import React from 'react';
import { Snackbar } from '@mui/material';

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
  const handleClose = (_: Event | React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setDisplayMessage(false);
  };

  return (
    <Snackbar
      autoHideDuration={4000}
      message={`Thanks ${senderFirstName}, I'll be in touch soon.`}
      open={displayMessage}
      onClose={handleClose}
    />
  );
}
