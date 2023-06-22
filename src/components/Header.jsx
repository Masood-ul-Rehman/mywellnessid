import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import hamburgerMenu from "../assets/images/burger.png";
import cross from "../assets/images/cross.png";

const Header = () => {
  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname;
  };
  const [menuActive, setMenuActive] = useState(false);
  console.log(menuActive, "acitve menu...");
  return (
    <>
      <>
        <nav className="lg:flex navi justify-between items-center cursor-pointer  xl:mx-36 lg:mx-24 md:mx-20 sm:mx-20 mx-10">
          <Link to="/">
            <img
              src={logo}
              alt="My Wellness Id logo"
              className="laptop:w-full"
            />
          </Link>
          <div className="gradient py-3 rounded-2xl lg:block hidden">
            <ul className="flex items-center">
              <li
                id="homeLink"
                className={`laptop:px-10 px-6 text-desc ${
                  isActive("/") ? "active" : ""
                } ml-4`}
              >
                <Link to="/">Home</Link>
              </li>

              <li
                id="homeLink"
                className={`laptop:px-10 px-6 text-desc ${
                  isActive("/how-it-work") ? "active" : ""
                } ml-4`}
              >
                <Link to="/how-it-work">How it works</Link>
              </li>

              <a href="#About">
                <li id="aboutLink" className="laptop:px-10 px-6 text-desc">
                  About us
                </li>
              </a>
              <a href="#Contact">
                <li
                  id="contactLink"
                  className="laptop:px-10 px-6 text-desc mr-4"
                >
                  Contact us
                </li>
              </a>
            </ul>
          </div>
          <button className="gradient px-6 py-5 rounded-xl lg:block hidden">
            Connect Wallet
          </button>
        </nav>
        <nav className="mobileNav hidden justify-between items-center cursor-pointer md:mx-20 sm:mx-20 mx-10 bg-sec  p-4 rounded-[14px] rounder-">
          <div className="flex justify-between">
            <a href="/">
              <img src={logo} alt="My Wellness Id logo" className="w-[60%]" />
            </a>
            <div>
              <img
                src={hamburgerMenu}
                className={`burger w-3/4 ${!menuActive ? "block" : "hidden"}`}
                onClick={() => setMenuActive(true)}
                alt="hamburger"
              />
              <img
                src={cross}
                className={`close w-3/4 ${menuActive ? "block" : "hidden"}`}
                onClick={() => setMenuActive(false)}
                alt="close"
              />
            </div>
          </div>
        </nav>
        <div
          className={`md:mx-20 sm:mx-20 mx-10 p-4 menu flex-col bg-sec rounded-bl-[14px] rounded-br-[14px] -mt-10 ${
            menuActive ? "flex" : "hidden"
          }`}
        >
          <ul className="text-start mt-6">
            <li id="homeLink" className="text-desc">
              <Link to="/">Home</Link>
            </li>

            <li id="featuresLink" className="text-desc mt-2">
              <Link to="/how-it-work">Features</Link>
            </li>

            <li id="aboutLink" className="text-desc mt-2">
              About us
            </li>
            <li id="contactLink" className="text-desc mt-2">
              Contact us
            </li>
          </ul>
          <button className="px-4 py-4 rounded-xl bt">Connect Wallet</button>
        </div>
      </>
    </>
  );
};

export default Header;
