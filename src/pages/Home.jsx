import React from 'react';

import { ArticlesList } from '../components/ArticlesList';
import { Search } from '../components/Search';

const Home = () => {
  return (
    <>
      <Search />
      <ArticlesList />
    </>
  );
};

export default Home;
