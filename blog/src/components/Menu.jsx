import React from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
const Menu = ({ setShowMenu, showMenu }) => {
  return (
    <nav className='flex flex-col fixed min-w-full p-6 space-y-5 bg-orange-600 top-20 bottom-500'>
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
          className='mx-4 my-4 text-white hover:text-white'
          to='/articles'
          onClick={() => setShowMenu(!showMenu)}>
          Posts
        </Link>
        {/* <TfiClose
          className='w-auto h-10 mb-4 font-bold text-white cursor-pointer'
          onClick={() => setShowMenu(!showMenu)}
        /> */}
      </div>
    </nav>
  );
};

export default Menu;
