import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
} from "@material-ui/core/";

import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.grey[900],
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <nav id="navbar">
      <HideOnScroll {...props}>
        <AppBar elevation={0} className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" color="primary" className={classes.title}>
              KS
            </Typography>
            <Menu />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </nav>
  );
}
