import React from "react";
import "./style.css";
import { useState } from "react";
import logo from "../../assets/logo_bg_removed.png"
import { HashLink as NavLink } from "react-router-hash-link";
import About from "../About";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => setIsopen(!isOpen);

  return (
    <>
    {/* {about = document.getElementById('about')} */}
    <div>
    <section className="navbar-container z-50" data-scroll-container>
    <div className="nav-logo">
        <img
        src={logo}
        alt="Logo"
        className="scale-150 w-[4em] "
        />
        </div>
      <nav className="nav1 md:bg-gray-700 z-50">
      </nav>

      <div className="Nav-components">
        

        <div className="Nav-in">
          <NavLink to="#" smooth duration={500} className="navlink md:cursor-pointer  md:hover:text-blue-400 md:duration-500">
            <p>Home</p>
          </NavLink>
          <NavLink to="#about" smooth duration={500} className="navlink md:cursor-pointer  md:hover:text-blue-400 md:duration-500">
            <p>
              About
            </p>
          </NavLink>
          <NavLink to="#awards" smooth duration={500} className="navlink md:cursor-pointer  md:hover:text-blue-400 md:duration-500">
            <p>
              Awards
            </p>
          </NavLink>
          <NavLink to="#events" smooth duration={500} className="navlink md:cursor-pointer  md:hover:text-blue-400 md:duration-500">
            <p>
              Events
            </p>
          </NavLink>
          <NavLink to="#projects" smooth duration={500} className="navlink md:cursor-pointer  md:hover:text-blue-400 md:duration-500">
            <p>
              Projects
            </p>
          </NavLink>  
        </div>
        <NavLink to="#contacts" smooth duration={500} className="registerbtn">
          <button className="nav-reg">
            <a  className="text-white">Contact Us</a>
          </button>
        </NavLink>
      </div>

      {/* code for small screens */}
      <div className="menu md:hidden top-6 right-5 absolute text-right z-50 h-[2rem] w-[36px] flex items-center justify-center" itemType="button" onClick={toggle}>
          {isOpen? (<svg className="w-6 h-6 bg-[#f5f0ec] rounded fixed" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>) : (<svg className="h-8 w-8 fixed rounded" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>)}
      </div>
      <div>
        <div className={`${isOpen? "flex" : "hidden"} md:hidden text-[#f5f0ec] bg-black fixed top-0 pt-40 text-center flex flex-col justify-start min-h-screen z-10 overflow-hidden w-2/3 right-0 rounded-l-[20px]`}>
          <div className="flex justify-center p-2 text-2xl" onClick={toggle}><NavLink smooth to="#" className=" font">Home</NavLink></div>
          <div className="flex justify-center p-2 text-2xl" onClick={toggle}><NavLink smooth to="#about" className=" font">About</NavLink></div>
          <div className="flex justify-center p-2 text-2xl" onClick={toggle}><NavLink smooth to="#awards" className=" font">Awards</NavLink></div>
          <div className="flex justify-center p-2 text-2xl" onClick={toggle}><NavLink smooth to="#events" className=" font">Events</NavLink></div>
          <div className="flex justify-center p-2 text-2xl" onClick={toggle}><NavLink smooth to="#projects" className=" font">Projects</NavLink></div>
          <div className="flex justify-center p-2 text-2xl" onClick={toggle}>
            <button className="nav-reg">
            <a href="#contacts">Contact Us</a>
          </button>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Navbar;
