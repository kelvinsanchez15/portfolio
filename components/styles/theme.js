import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: blue,
    },
  })
);

export default theme;
