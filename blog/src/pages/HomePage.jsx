import React from "react";
import ArticlesList from "../components/ArticleList";
import { featuredArticles } from "../article-contents";

const HomePage = () => {
  return (
    <div>
      <h3 className='mx-4 font-bold'>Featured Posts:</h3>
      <ArticlesList articles={featuredArticles} />
    </div>
  );
};

export default HomePage;
