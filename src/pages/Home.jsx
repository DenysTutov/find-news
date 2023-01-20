import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ArticlesList } from '../components/ArticlesList/ArticlesList';
import { Search } from '../components/Search/Search';
import { fetchArticles } from '../redux/slices/articleSlice';

//Material UI
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/myTheme.js';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getArticles = () => {
      dispatch(fetchArticles());
    };

    getArticles();
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          p: '75px',
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
