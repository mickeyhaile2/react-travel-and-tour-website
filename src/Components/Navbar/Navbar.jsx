import React from "react";
import "./navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navList flex">
            <li className="navItem">
              <a hrev="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a hrev="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a hrev="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a hrev="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a hrev="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a hrev="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a hrev="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
