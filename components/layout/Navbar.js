import { cloneElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import Menu from "./Menu";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "white" : "transparent",
      color: trigger ? "black" : "white",
      transition: trigger ? "0.3s" : "0.5s",
      padding: trigger ? "0px" : "10px 0px",
    },
  });
}

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <nav id="navbar">
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              KS
            </Typography>
            <Menu />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </nav>
  );
}
