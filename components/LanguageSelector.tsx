import React from 'react';
import { useRouter } from 'next/router';
import { Button, FormControl, Menu, MenuItem } from '@mui/material';
import {
  Translate as TranslateIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';

const languages = [
  { code: 'en', text: 'English' },
  { code: 'es', text: 'Español' },
];

export default function LanguageSelector() {
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
    <FormControl sx={{ ml: 2, mr: { xs: 2, md: 0 } }}>
      <Button
        aria-haspopup="true"
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<TranslateIcon />}
        variant="outlined"
        onClick={handleButtonClick}
      >
        {locale === 'en' ? 'ENGLISH' : 'ESPAÑOL'}
      </Button>

      <Menu
        keepMounted
        PaperProps={{ style: { width: '144px' } }}
        anchorEl={anchorEl}
        id="language-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            lang={language.code}
            selected={locale === language.code}
            onClick={handleMenuItemClick}
          >
            {language.text}
          </MenuItem>
        ))}
      </Menu>
    </FormControl>
  );
}
