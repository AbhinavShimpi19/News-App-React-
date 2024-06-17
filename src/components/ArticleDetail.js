import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { title } = useParams();

  return (
    <div>
      <h1>{title}</h1>
      <p>Display the full article content here.</p>
    </div>
  );
};

export default ArticleDetail;
