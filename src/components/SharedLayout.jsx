import React from 'react';

//Material UI
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/myTheme.js';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        component="main"
        maxWidth="xl"
        sx={{
          p: '75px',
          pt: '50px',
          color: theme.palette.primaryColor.main,
        }}
      >
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default SharedLayout;
