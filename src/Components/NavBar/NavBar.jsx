import React from 'react';
import { Link } from 'react-router-dom';
import NavBarCss from './NavBar.module.css';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button';
import { useTheme } from '../../contexts/theme.context';

export default function NavBar() {
  const [, setTheme] = useTheme();
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
      <button
        type="button"
        onClick={(prev) => setTheme(prev === 'light' ? 'dark' : 'light')}
      >
        Toogle
      </button>
      <i className="fa fa-search" />
      <div className={NavBarCss.nav_btn}>
        <Button text="Sign Up" color="#c7923c" />
      </div>
    </div>
  );
}
