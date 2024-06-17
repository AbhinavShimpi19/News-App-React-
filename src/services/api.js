import axios from 'axios';

const API_KEY = 'YOUR_NEWS_API_KEY'; // Replace with your actual NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        page,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
