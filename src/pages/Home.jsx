import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ArticlesList } from '../components/ArticlesList/ArticlesList';
import { Search } from '../components/Search/Search';
import { fetchArticles } from '../redux/slices/articleSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getArticles = () => {
      dispatch(fetchArticles());
    };

    getArticles();
  });

  return (
    <div>
      <Search />
      <ArticlesList />
    </div>
  );
};

export default Home;
