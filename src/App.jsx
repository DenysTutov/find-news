import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
const Home = lazy(() => import('./pages/Home'));
const Article = lazy(() => import('./pages/Article'));

export const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="" element={<Home />} />

          <Route path="article/:id" element={<Article />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
