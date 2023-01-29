import React from 'react';

import { ArticlesList } from '../components/ArticlesList';
import { Search } from '../components/Search';

//Material UI
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/myTheme.js';

const Home = () => {
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
        <Search />
        <ArticlesList />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
