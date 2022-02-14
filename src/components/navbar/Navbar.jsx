import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#product">Product</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="figmaland__navbar">
      <div className="figmaland__navbar-links">
        <div className="figmaland__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="figmaland__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="figmaland__navbar-login">
        <button type="button"> Login </button>
      </div>
      <div className="figmaland__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="figmaland__navbar-menu_container scale-up-center">
            <div className="figmaland__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
