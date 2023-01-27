import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const fetchArticles = async () => {
  const { data: articles } = await axios.get(`/v3/articles?_limit=10`);
  const { data: count } = await axios.get(`/v3/articles/count`);

  return { articles, count };
};

export const fetchArticlesBySearch = async ({ search }) => {
  const titleSearch = search ? `title_contains=${search}` : '';
  const summarySearch = search ? `summary_contains=${search}` : '';

  const { data: dataOnTitle } = await axios.get(
    `/v3/articles?_limit=10&${titleSearch}`
  );
  const { data: dataOnSummary } = await axios.get(
    `/v3/articles?_limit=10&${summarySearch}`
  );

  const articles = [...dataOnTitle, ...dataOnSummary].filter(
    (value, index, self) => index === self.findIndex(t => t.id === value.id)
  );

  const { data: count } = await axios.get(`/v3/articles/count?${titleSearch}`);

  return { articles, count };
};
