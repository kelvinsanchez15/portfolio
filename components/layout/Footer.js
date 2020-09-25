import { makeStyles } from "@material-ui/core/styles";
import { Box, Fab, Typography } from "@material-ui/core/";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0, 5, 0),
    backgroundColor: theme.palette.grey[900],
  },
  fab: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Fab
          className={classes.fab}
          color="secondary"
          size="small"
          href="/#"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>

        <Typography component="p" variant="h6" align="center" gutterBottom>
          KELVIN SANCHEZ ©2020
        </Typography>
      </Box>
    </footer>
  );
}
