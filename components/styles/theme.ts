import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: cyan,
      error: {
        main: '#ff6358',
      },
    },
    overrides: {
      MuiListItemIcon: {
        root: {
          minWidth: 0,
          marginRight: '0.5rem',
        },
      },
      MuiOutlinedInput: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #1d3140 inset',
          },
        },
      },
    },
  })
);

export default theme;
