import React from 'react';
import { ArticleItem } from '../components/ArticleItem';
import { Grid, Typography } from '@mui/material';
import { useGetArticlesQuery } from '../redux/slices/articles/api';
import { useSelector } from 'react-redux';

export const ArticlesList = () => {
  const searchValue = useSelector(state => state.search.searchValue);

  const { data: articles, isLoading } = useGetArticlesQuery(
    searchValue ? `&title_contains=${searchValue}` : ''
  );

  return (
    <>
      {isLoading ? (
        <Typography
          component="div"
          sx={{
            fontSize: '24px',
            fontWeight: '400',
            mb: '20px',
            textAlign: 'center',
            margin: '20px auto',
          }}
        >
          Loading...
        </Typography>
      ) : (
        <Grid
          container
          rowSpacing={{ md: '45px' }}
          columnSpacing={{ sm: '45px', md: '45px' }}
          columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
        >
          {articles?.map(article => (
            <Grid item xs={4} sm={4} md={4} lg={4} key={article.id}>
              <ArticleItem article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
