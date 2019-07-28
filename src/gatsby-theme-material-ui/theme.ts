import { createMuiTheme } from "@material-ui/core";

const customPalette = {
  grey1: '#f8f9fa'
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    custom: typeof customPalette
  }
  interface PaletteOptions {
    custom?: typeof customPalette
  }
}

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      fontSizeLarge: {
        fontSize: '3.5rem'
      }
    }
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica-Neue"',
      '-apple-system',
      'sans-serife'
    ].join(','),
    h2: {
      fontSize: '2.2rem',
      color: '#007bff',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      color: '#000',
      fontWeight: 500,
      lineHeight: 1.2
    },
    h4: {
      fontSize: '1.2rem',
      color: '#000',
      fontWeight: 500,
      lineHeight: 1.2
    },
    h6: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '.2rem',
      fontWeight: 400,
      color: '#b3b3b3'
    }
  },
  palette: {
    custom: customPalette,
    primary: {
      main: '#007bff'
    }
  }
})

export default theme