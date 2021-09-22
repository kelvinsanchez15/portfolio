import { createTheme, responsiveFontSizes } from '@mui/material';
import { cyan, pink } from '@mui/material/colors';

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: cyan,
      secondary: pink,
      error: {
        main: '#ff6358',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            scroll-behavior: smooth;
          }
        `,
      },
    },
  })
);

export default theme;
