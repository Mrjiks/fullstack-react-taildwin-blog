import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

const NavBar = ({ setShowMenu, showMenu }) => {
  return (
    <div className='container flex z-50 justify-between sticky inset-0 w-full m-auto overflow-hidden bg-orange-600 md:px-10'>
      <div className='flex items-center h-20 p-4 rounded-lg shadow-lg '>
        <Link to={`/articles`}>
          <span className='font-extrabold text-white hover:text-black '>ᗰᖇᒍIKᔕ</span>
        </Link>
      </div>
      <div className='items-center hidden md:flex'>
        <nav className='items-center justify-around '>
          <Link className='p-4 mx-4 hover:border-b-2 hover:bg-black hover:text-white' to='/'>
            Home
          </Link>
          <Link className='p-4 mx-4 hover:border-b-2 hover:bg-black hover:text-white' to='/about'>
            About
          </Link>
          <Link
            className='p-4 mx-4 hover:border-b-2 hover:bg-black hover:text-white'
            to='/articles'>
            Posts
          </Link>
        </nav>
      </div>
      {!showMenu ? (
        <div className='flex items-center md:hidden'>
          <FiMenu
            className='w-auto h-20 font-bold text-white'
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      ) : (
        <div className='flex items-center p-2 shadow-lg md:hidden'>
          <TfiClose
            className='flex items-center w-auto h-10 mt-6 mr-4 font-bold text-white'
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
