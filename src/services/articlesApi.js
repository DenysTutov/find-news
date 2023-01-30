import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';

export const getArticleById = async id => {
  const { data } = await axios.get(`/v3/articles/${id}`);

  return data;
};
