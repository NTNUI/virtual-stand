import {createTheme} from '@material-ui/core/styles';

export default createTheme({
  typography: {
    'fontFamily': '\'Krub\', \'Roboto\', \'Helvetica\', sans-serif',
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#F76C6C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1F0322',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B71C1C',
      contrastText: '#ffffff',
    },
    type: 'dark',
  },
  colors: {
    ntnui: {
      black: '#1a1915',
      red: '#e5322b',
      green: '#2e7235',
      yellow: '#f6e928',
    },
    background: {
      primary: '#2e7235',
      primaryLight: '#204f25',
      secondary: '#e6e6ea',
    },
    text: {
      primaryContrast: '#ffffff',
      main: '#111111',
      light: '#333333',
    },
    button: {
      primary: '#F76C6C',
      primaryText: '#ffffff',
      secondary: '#1f0322',
      secondaryText: '#ffffff',
    },
  },
});
