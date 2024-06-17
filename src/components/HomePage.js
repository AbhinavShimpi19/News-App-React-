import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../services/api';
import Article from './components/Article';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchArticles(category, page);
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getArticles();
  }, [category, page]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>News Articles</h1>
      <div>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      <div className="articles"> 
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
