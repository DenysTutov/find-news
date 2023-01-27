import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArticlesList } from '../components/ArticlesList';
import { Search } from '../components/Search';
import {
  getArticles,
  getArticlesBySearch,
} from '../redux/slices/articles/articlesOperations';
import { selectorSearch } from '../redux/slices/filterSlice';

//Material UI
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/myTheme.js';

const Home = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectorSearch);

  useEffect(() => {
    if (!searchValue) {
      dispatch(getArticles());
    }
  }, [dispatch, searchValue]);

  useEffect(() => {
    const fetchArticlesBySearch = () => {
      const search = searchValue ? searchValue : '';
      dispatch(getArticlesBySearch({ search }));
    };

    if (searchValue) {
      fetchArticlesBySearch();
    }
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
