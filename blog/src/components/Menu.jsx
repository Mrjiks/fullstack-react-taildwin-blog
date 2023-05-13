import React from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
const Menu = ({ setShowMenu, showMenu }) => {
  return (
    <nav className='flex flex-col fixed top-0 min-w-full p-6 space-y-5 bg-orange-300 bottom-500'>
      <div className='flex flex-col items-center justify-evenly'>
        <Link
          className='mx-4 hover:bg-black hover:text-white'
          to='/'
          onClick={() => setShowMenu(!showMenu)}>
          Home
        </Link>
        <Link
          className='mx-4 hover:bg-black hover:text-white'
          to='/about'
          onClick={() => setShowMenu(!showMenu)}>
          About
        </Link>
        <Link
          className='mx-4 hover:bg-black hover:text-white'
          to='/articles'
          onClick={() => setShowMenu(!showMenu)}>
          Posts
        </Link>
        <div className='mt-2'>
          <TfiClose
            className='w-auto h-10 font-bold text-white'
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
