import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica-Neue"',
      '-apple-system',
      'sans-serife'
    ].join(',')
  }
})

export default theme