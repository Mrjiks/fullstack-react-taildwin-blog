import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold text-black lg:text-6xl'>404</h1>

            <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
              <span className='text-red-300'>Oops!</span> Page
            </h6>

            <p className='mb-4 text-center text-gray-500 md:text-lg'>
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to='/'
              className='px-5 py-2 text-black bg-orange-300 rounded-md hover:text-white hover:bg-gray-700'>
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
