import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='container flex justify-between sticky inset-0 px-10 mb-4 overflow-hidden bg-orange-300 max-auto'>
      <div className='flex items-center h-20 p-4 m-2 rounded-lg shadow-lg'>
        <Link to={`/articles`}>
          <span className='font-extrabold text-white hover:text-black '>ᗰᖇᒍIKᔕ</span>
        </Link>
      </div>
      <nav className='flex items-center justify-around mx-10'>
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
  );
};

export default NavBar;
