import { createMuiTheme } from "@material-ui/core/styles";
import { blue, green, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: blue[800],
    },
    grey: {
      main: grey[200],
    },
    green: {
      main: green["A700"],
    },
  },
});

export default theme;
