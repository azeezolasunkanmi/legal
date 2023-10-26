import { useState } from "react";

import { logo, close, menu } from "../assets";

import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img
        src={logo}
        alt="practice Partner"
        className="w-[34px] h-[34px] md:w-[40px] md:h-[40px] xl:w-[54px] xl:h-[54px]"
      />

      <ul className="list-none hidden md:flex items-center shrink-0 gap-4 lg:gap-6">
        {navLinks.map(nav => (
          <Link
            to={nav.to}
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px] lg:text-[18px] xl:text-[20px] text-dimDark"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </Link>
        ))}
      </ul>
      <div className="flex gap-2">
        <Link to="auth">
          <button className="bg-primary px-6 py-2 rounded-md shrink-0 text-white font-poppins font-normal text-[14px] md:py-[10px] md:rounded-x md:text-[16px] xl:px-12 xl:text-[20px]">
            Try it for free
          </button>
        </Link>

        <div className="md:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[23px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(prev => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-tertiary w-full absolute top-[60px] my-2 right-0 sidebar slide-in-top`}
          >
            <ul className="list-none h-[100vh] flex items-center mx-auto mt-4 cursor-pointer flex-col gap-6">
              {navLinks.map(nav => (
                <Link
                  to={nav.to}
                  key={nav.id}
                  className="font-poppins font-normal cursor-pointer text-[16px] lg:text-[18px] xl:text-[20px] text-dimDark"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
