import React from "react";
import { articles } from "../article-contents";
import ArticlesList from "../components/ArticleList";

const ArticlesListPage = () => {
  return <ArticlesList articles={articles} />;
};

export default ArticlesListPage;
