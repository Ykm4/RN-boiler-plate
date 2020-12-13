import axios from 'axios';

export type ArticleType = {
  source: {
    id: null | string;
    name: string;
  };
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: null | string;
};

export type Response = {
  status: string;
  totalResults: number;
  articles: ArticleType[];
};

// APIキーはURLに含める方法しかないのか調べる
// https://newsapi.org/docs/authentication
const axiosInstance = axios.create({
  baseURL:
    'https://newsapi.org/v2/top-headlines?country=jp&apiKey=3b583c96f7c7451f88682de52f991096',
  timeout: 3000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export const fetchEntertainmentNews = axiosInstance.get<Response>(
  '&category=entertainment',
);
