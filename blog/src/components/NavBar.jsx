import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

const NavBar = ({ setShowMenu, showMenu }) => {
  return (
    <div className='container flex z-50 justify-between inset-0 overflow-hidden bg-orange-300 md:sticky md:px-10 max-auto'>
      <div className='flex items-center h-20 p-4 rounded-lg shadow-lg '>
        <Link to={`/articles`}>
          <span className='font-extrabold text-white hover:text-black '>ᗰᖇᒍIKᔕ</span>
        </Link>
      </div>
      <div className='items-center hidden md:flex'>
        <nav className='items-center justify-around '>
          <Link className='px-4 mx-4 hover:bg-black hover:text-white' to='/'>
            Home
          </Link>
          <Link className='px-4 mx-4 hover:bg-black hover:text-white' to='/about'>
            About
          </Link>
          <Link className='px-4 mx-4 hover:bg-black hover:text-white' to='/articles'>
            Posts
          </Link>
        </nav>
      </div>
      <div className='flex items-center md:hidden'>
        <FiMenu
          className='w-auto h-20 font-bold text-white'
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </div>
  );
};

export default NavBar;
