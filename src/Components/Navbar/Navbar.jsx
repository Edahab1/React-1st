import React from "react";
import style from './Navbar.module.css'
import {Link, NavLink } from "react-router-dom";


export default function Navbar() {


  return (
    <>
    <nav className=" bg-slate-700 fixed top-0 left-0 right-0 text-white py-5 z-10">
      <div className="flex justify-between items-center w-4/5 mx-auto">
      <div className="text-[32px] font-bold"><Link to="">START FRAMEWORK</Link></div>
      <ul className="flex text-[18px]">
        <li className="font-semibold"><NavLink to="about">About</NavLink></li>
        <li className="px-7 font-semibold"><NavLink to="portfolio">Portfolio</NavLink></li>
        <li className="font-semibold"><NavLink to="contact">Contact</NavLink></li>
      </ul>
      </div>
    </nav>
    </>
  );
}
