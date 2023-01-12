import React from 'react';
import { Link } from 'react-router-dom';
import NavBarCss from './NavBar.module.css';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';

export default function NavBar() {
  return (
    <div className={NavBarCss.navbar__main}>
      <div className={NavBarCss.navbarLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={NavBarCss.nav_Links}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <a href="/">Tour package</a>
        <a href="/">Gallery</a>
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
      </div>
      <div className={NavBarCss.nav_btn}>
        <Button text="Sign Up" color="#c7923c" />
      </div>
    </div>
  );
}
