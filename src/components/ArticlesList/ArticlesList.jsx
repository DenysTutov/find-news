import React from 'react';
import { useSelector } from 'react-redux';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { Grid, Item } from '@mui/material';

export const ArticlesList = () => {
  const articles = useSelector(state => state.article.items);

  return (
    <Grid container columnSpacing={{ md: '45px' }} columns={{ md: 12 }}>
      {articles.map(article => (
        <Grid item md={4} key={article.id}>
          <ArticleItem article={article} />
        </Grid>
      ))}
    </Grid>
  );
};
