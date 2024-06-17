import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticleDetail from '.components/ArticleDetail';
import './index.css';
// import HomePage from './components/HomePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:title" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
