import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, Menu, MenuItem } from '@material-ui/core';
import {
  Translate as TranslateIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@material-ui/icons';

const languages = [
  { code: 'en', text: 'English' },
  { code: 'es', text: 'Español' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
    },
  },
}));

export default function LanguageSelector() {
  const classes = useStyles();
  const router = useRouter();
  const { locale } = router;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: { currentTarget: { lang: string } }) => {
    setAnchorEl(null);
    router.push(router.pathname, router.asPath, {
      locale: event.currentTarget.lang,
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FormControl className={classes.root}>
      <Button
        variant="outlined"
        onClick={handleButtonClick}
        startIcon={<TranslateIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        aria-haspopup="true"
      >
        {locale === 'en' ? 'ENGLISH' : 'ESPAÑOL'}
      </Button>

      <Menu
        id="language-menu"
        PaperProps={{ style: { width: '144px' } }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            selected={locale === language.code}
            onClick={handleMenuItemClick}
            lang={language.code}
          >
            {language.text}
          </MenuItem>
        ))}
      </Menu>
    </FormControl>
  );
}
