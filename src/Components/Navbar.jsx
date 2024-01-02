import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Navbars = () => {
  return (
    <>
      <nav className="bg-slate-900 border-white border-t-2 p-4">
        <div className="container mx-auto flex   items-center">
          <div className="text-white text-4xl font-serif font-bold">Bl<span className="text-orange-500">ogs</span></div>

          <div className="flex space-x-11">
          <li className="list-none ml-12 mt-2">
            <NavLink to='/' className={({isActive})=> `text-white ${isActive ? "text-orange-500" : "text-white"} font-serif text-xl hover:text-orange-500` }>
              Home
            </NavLink>
          </li>
          <li className="list-none ml-12 mt-2 ">
            <NavLink to='About' className={({isActive})=> `text-white ${isActive ? "text-orange-500" : "text-white"} font-serif text-xl hover:text-orange-500` }>
              About
            </NavLink>
          </li>
          <li className="list-none ml-12 mt-2 ">
            <NavLink to='Post' className={({isActive})=> `text-white ${isActive ? "text-orange-500" : "text-white"} font-serif text-xl hover:text-orange-500` }>
              Submit - Post
            </NavLink>
          </li>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbars;
