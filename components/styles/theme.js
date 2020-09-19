import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: cyan,
    },
    overrides: {
      MuiListItemIcon: {
        root: {
          minWidth: 0,
        },
      },
      MuiAutocomplete: {
        option: {
          '&[data-focus="true"]': {
            backgroundColor: "red",
          },
        },
      },
    },
  })
);

export default theme;
