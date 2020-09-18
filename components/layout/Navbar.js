import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  Hidden,
  IconButton,
  Button,
} from "@material-ui/core/";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Mail as MailIcon,
  PermIdentity as PermIdentityIcon,
} from "@material-ui/icons";

import NavigationDrawer from "./NavigationDrawer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  title: {
    flexGrow: 1,
  },
  noDecoration: {
    textDecoration: "none !important",
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { link: "/#", name: "HOME", icon: <HomeIcon /> },
    { link: "/#about", name: "ABOUT", icon: <PermIdentityIcon /> },
    { link: "/#portfolio", name: "PORTFOLIO", icon: <WorkIcon /> },
    { link: "/#contact", name: "CONTACT", icon: <MailIcon /> },
  ];

  return (
    <nav id="navbar">
      <HideOnScroll {...props}>
        <AppBar elevation={0} className={classes.appbar}>
          <Toolbar>
            <Typography variant="h3" color="primary" className={classes.title}>
              K
            </Typography>
            <Hidden smDown implementation="css">
              {menuItems.map((item) => {
                return (
                  <Button
                    key={item.name}
                    href={item.link}
                    size="large"
                    component="a"
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Hidden>
            <Hidden mdUp implementation="css">
              <IconButton
                onClick={handleDrawerToggle}
                aria-label="Open Navigation"
              >
                <MenuIcon fontSize="large" color="secondary" />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />
    </nav>
  );
}
