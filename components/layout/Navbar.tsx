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

import NavigationDrawer from './NavigationDrawer';
import AnimatedLink from '../AnimatedLink';
import LanguageSelector from '../LanguageSelector';

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
      name: `${router.locale === 'en' ? 'PORFOLIO' : 'PORTAFOLIO'}`,
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
        <AppBar elevation={0} className={classes.appbar}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar} disableGutters>
              <Link className={classes.logo} href="/" variant="button">
                <Typography variant="h3" color="primary">
                  K
                </Typography>
              </Link>

              <Hidden smDown implementation="css">
                {menuItems.map((item) => (
                  <AnimatedLink
                    className={classes.link}
                    key={item.name}
                    href={item.link}
                    variant="button"
                    color="inherit"
                    underline="none"
                  >
                    {item.name}
                  </AnimatedLink>
                ))}
              </Hidden>

              <LanguageSelector />

              <Hidden mdUp implementation="css">
                <IconButton
                  onClick={handleDrawerToggle}
                  aria-label="Open Navigation"
                >
                  <MenuIcon fontSize="large" color="secondary" />
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
