import React from "react";
import { Link } from "react-router-dom";
const Menu = ({ setShowMenu, showMenu }) => {
  return (
    <nav className='container flex flex-col justify-center fixed p-6 m-auto space-y-5 bg-orange-600 min-w-fit top-20 bottom-500'>
      <div className='flex flex-col items-center rounded shadow-sm justify-evenly '>
        <Link
          className='mx-4 text-white hover:text-white'
          to='/'
          onClick={() => setShowMenu(!showMenu)}>
          Home
        </Link>
        <Link
          className='mx-4 my-4 text-white hover:text-white'
          to='/about'
          onClick={() => setShowMenu(!showMenu)}>
          About
        </Link>
        <Link
          className='mx-4 text-white hover:text-white'
          to='/articles'
          onClick={() => setShowMenu(!showMenu)}>
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
