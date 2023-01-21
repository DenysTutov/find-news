import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArticlesList } from '../components/ArticlesList/ArticlesList';
import { Search } from '../components/Search/Search';
import { fetchArticles } from '../redux/slices/articleSlice';
import { selectorSearch } from '../redux/slices/filterSlice';

//Material UI
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/myTheme.js';

const Home = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectorSearch);

  useEffect(() => {
    const getArticles = () => {
      const search = searchValue
        ? `title_contains=${searchValue}&summary_contains=${searchValue}`
        : '';
      dispatch(fetchArticles({ search }));
    };

    getArticles();
  }, [dispatch, searchValue]);

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
