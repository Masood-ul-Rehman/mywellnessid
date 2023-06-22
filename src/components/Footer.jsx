import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <>
      <footer className="gradient flex items-center flex-col py-16 lg:mt-36 mt-24">
        <Link href="/">
          <img src={logo} alt="My Wellness Id logo" className="" />
        </Link>
        <ul className="sm:flex text-center menu mt-6">
          <li id="homeLink" className="text-desc px-6">
            <Link to="/">Home</Link>
          </li>

          <li id="featuresLink" className="text-desc px-6">
            <Link to="/how-it-work">How it works</Link>
          </li>

          <a href="#">
            <li id="aboutLink" className="text-desc px-6">
              About us
            </li>
          </a>
          <a href="#">
            <li id="contactLink" className="text-desc px-6">
              Contact us
            </li>
          </a>
        </ul>
        <div className="border-b-[.5px] border-desc w-[80%] mt-4" />
        <h4 className="mt-4 text-desc">
          © 2023 My Wellness ID All rights reserved
        </h4>
      </footer>
    </>
  );
}

export default Footer;
