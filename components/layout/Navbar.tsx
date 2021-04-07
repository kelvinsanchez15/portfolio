import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  Hidden,
  IconButton,
  Container,
} from '@material-ui/core/';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  Mail as MailIcon,
  PermIdentity as PermIdentityIcon,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

import Link from '../Link';
import AnimatedLink from '../AnimatedLink';
import LanguageSelector from '../LanguageSelector';

import NavigationDrawer from './NavigationDrawer';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  toolbar: {
    display: 'flex',
  },
  logo: {
    textDecoration: 'none !important',
    flexGrow: 1,
  },
  link: {
    padding: '12px 15px',
  },
}));

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ElevateAppBar() {
  const classes = useStyles();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      link: '/#',
      name: `${router.locale === 'en' ? 'HOME' : 'INICIO'}`,
      icon: <HomeIcon />,
    },
    {
      link: '/#about',
      name: `${router.locale === 'en' ? 'ABOUT' : 'ACERCA DE MI'}`,
      icon: <PermIdentityIcon />,
    },
    {
      link: '/#portfolio',
      name: `${router.locale === 'en' ? 'PORTFOLIO' : 'PORTAFOLIO'}`,
      icon: <WorkIcon />,
    },
    {
      link: '/#blog',
      name: 'BLOG',
      icon: <AssignmentIcon />,
    },
    {
      link: '/#contact',
      name: `${router.locale === 'en' ? 'CONTACT' : 'CONTACTO'}`,
      icon: <MailIcon />,
    },
  ];

  return (
    <nav id="navbar">
      <HideOnScroll>
        <AppBar className={classes.appbar} elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters className={classes.toolbar}>
              <Link className={classes.logo} href="/" variant="button">
                <Typography color="primary" variant="h3">
                  K
                </Typography>
              </Link>

              <Hidden smDown implementation="css">
                {menuItems.map((item) => (
                  <AnimatedLink
                    key={item.name}
                    className={classes.link}
                    color="inherit"
                    href={item.link}
                    underline="none"
                    variant="button"
                  >
                    {item.name}
                  </AnimatedLink>
                ))}
              </Hidden>

              <LanguageSelector />

              <Hidden mdUp implementation="css">
                <IconButton
                  aria-label="Open Navigation"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon color="secondary" fontSize="large" />
                </IconButton>
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <NavigationDrawer
        menuItems={menuItems}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />
    </nav>
  );
}
