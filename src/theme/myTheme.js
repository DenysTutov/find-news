import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'system-ui',
      'Tahoma',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primaryColor: {
      main: '#363636',
      border: '#eaeaea',
      secondary: '#989898',
      bgColor: '#ffffff',
    },
  },
});
