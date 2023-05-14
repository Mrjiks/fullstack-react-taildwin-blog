import React from "react";
import ArticlesList from "../components/ArticleList";
import { featuredArticles } from "../article-contents";

const HomePage = () => {
  return (
    <div className='container m-auto mt-3'>
      <h3 className='mx-4 font-bold'>Featured Posts:</h3>
      <ArticlesList articles={featuredArticles} title='Featured Posts' />
    </div>
  );
};

export default HomePage;
