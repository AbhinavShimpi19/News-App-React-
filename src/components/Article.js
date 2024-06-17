import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.description}</p>
      <Link to={`/article/${encodeURIComponent(article.title)}`}>Read more</Link>
    </div>
  );
};

export default Article;
