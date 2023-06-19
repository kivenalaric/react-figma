import React from 'react';
import { Link } from 'react-router-dom';
import NavBarCss from './NavBar.module.css';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';

export default function NavBar() {
  return (
    <div className={NavBarCss.navbar__main}>
      <div className={NavBarCss.navbar__right}>
        <div className={NavBarCss.navbarLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={NavBarCss.nav_Links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/packages">Tour package</Link>
          <Link to="/gallery">Gallery</Link>
          <a href="/">Blog</a>
          <Link to="/contactus">Contact Us</Link>
        </div>
      </div>
      <div className={NavBarCss.nav_btn}>
        <Button text="Sign Up" color="#c7923c" />
      </div>
    </div>
  );
}
