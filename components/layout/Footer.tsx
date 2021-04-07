import { makeStyles } from '@material-ui/core/styles';
import { Box, Fab, Typography } from '@material-ui/core/';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { NextLinkComposed } from '../Link';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0, 5, 0),
  },
  fab: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box alignItems="center" display="flex" flexDirection="column">
        <Fab
          aria-label="Scroll back to top"
          className={classes.fab}
          color="secondary"
          component={NextLinkComposed}
          size="small"
          title="Scroll back to top"
          to="/"
        >
          <KeyboardArrowUpIcon />
        </Fab>

        <Typography gutterBottom align="center" component="p" variant="h6">
          KELVIN SANCHEZ ©2021
        </Typography>
      </Box>
    </footer>
  );
}
