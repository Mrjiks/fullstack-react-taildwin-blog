import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../article-contents";
import { NotFoundPage } from "../pages";

const ArticlePage = () => {
  let { articleId } = useParams();
  const article = articles.find((article) => article.title === articleId);
  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className='flex flex-col justify-center mx-10 mt-4 mb-5 w-w-10/12 max-auto'>
      <h1 className='mb-4 font-semibold text-red-300'>{article.title}</h1>
      <p className='text-justify'>{article.content}</p>
      <Link to={`/articles`} className='text-red-300'>
        See More posts
      </Link>
    </div>
  );
};

export default ArticlePage;
