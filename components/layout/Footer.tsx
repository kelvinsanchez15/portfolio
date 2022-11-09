import { Box, Fab, Typography } from '@mui/material/';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { NextLinkComposed } from '../Link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 5, bgcolor: (theme) => theme.palette.grey[900] }}
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <Fab
          aria-label="Scroll back to top"
          color="secondary"
          component={NextLinkComposed}
          size="small"
          sx={{ mb: 2 }}
          title="Scroll back to top"
          to="/#"
        >
          <KeyboardArrowUpIcon />
        </Fab>

        <Typography gutterBottom align="center" component="p" variant="h6">
          KELVIN SANCHEZ ©{new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
