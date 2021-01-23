import { Snackbar } from '@material-ui/core';

export default function EmailSuccessMessage({
  senderFirstName,
  setDisplayMessage,
  displayMessage,
}) {
  const handleClose = (event, reason) => {
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
