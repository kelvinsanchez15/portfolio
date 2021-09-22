import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  IconButton,
  Container,
} from '@mui/material/';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  Mail as MailIcon,
  PermIdentity as PermIdentityIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/router';

import Link from '../Link';
import AnimatedLink from '../AnimatedLink';
import LanguageSelector from '../LanguageSelector';

import NavigationDrawer from './NavigationDrawer';

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
        <AppBar elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ display: 'flex' }}>
              <Link
                href="/"
                sx={{ textDecoration: 'none !important', flexGrow: 1 }}
                variant="button"
              >
                <Typography color="primary" variant="h3">
                  K
                </Typography>
              </Link>

              {menuItems.map((item) => (
                <AnimatedLink
                  key={item.name}
                  color="inherit"
                  href={item.link}
                  sx={{ display: { xs: 'none', md: 'block' } }}
                  underline="none"
                  variant="button"
                >
                  {item.name}
                </AnimatedLink>
              ))}

              <LanguageSelector />

              <IconButton
                aria-label="Open Navigation"
                size="large"
                sx={{ display: { md: 'none' } }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon color="secondary" fontSize="large" />
              </IconButton>
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
