import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <div className='flex flex-col justify-between grid-cols-4 mx-auto mt-4 md:grid '>
      {articles.map((article) => {
        const { title, id, content } = article;

        return (
          <div
            key={id}
            className='justify-between p-4 m-4 transition-all border-2 shadow-lg hover:cursor-pointer'>
            <Link to={`/articles/${article.title}`}>
              <h1 className='mb-4 font-bold text-blue-400'>{title}</h1>
              <p className='text-justify '>{content.substring(0, 150)}...</p>
              <p className='mt-2 text-red-300 '>Read more</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesList;
