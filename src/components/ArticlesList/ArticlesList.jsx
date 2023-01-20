import React from 'react';
import { useSelector } from 'react-redux';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import styles from './ArticlesList.module.scss';

export const ArticlesList = () => {
  const articles = useSelector(state => state.article.items);

  return (
    <div className={styles.articlesList}>
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};
