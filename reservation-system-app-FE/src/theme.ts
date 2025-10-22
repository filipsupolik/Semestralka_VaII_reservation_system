import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8e6e3f',
      contrastText: '#ead2bb',
      light: '#d2b28c',
      dark: '#715936',
    },
    secondary: {
      main: '#f59905',
    },
    background: {
      default: '#b38c68',
      paper: '#714e24',
    },
    text: {
      primary: '#d4b28d',
      secondary: 'rgba(84,70,55,0.7)',
      disabled: 'rgba(71,85,94,0.5)',
    },
  },
};