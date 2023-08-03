import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../contexts/contexts';
import MenuCss from './MobileM.module.css';
import { MenuIconClose } from '../Icons';

function Menu() {
  const navigate = useNavigate();
  const { toogleMenu } = useContext(MyContext);
  return (
    <div className={MenuCss.main}>
      <div className={MenuCss.menu_sec}>
        <MenuIconClose onClick={toogleMenu} />
      </div>
      <button
        type="button"
        className={MenuCss.btn}
        onClick={() => {
          navigate('/');
          toogleMenu();
        }}
      >
        Home
      </button>
      <button
        type="button"
        className={MenuCss.btn}
        onClick={() => {
          navigate('/about');
          toogleMenu();
        }}
      >
        About
      </button>
      <button
        type="button"
        className={MenuCss.btn}
        onClick={() => {
          navigate('/packages');
          toogleMenu();
        }}
      >
        Packages
      </button>
      <button
        type="button"
        className={MenuCss.btn}
        onClick={() => {
          navigate('/gallery');
          toogleMenu();
        }}
      >
        Gallery
      </button>
      <button
        type="button"
        className={MenuCss.btn}
        onClick={() => {
          navigate('/contactus');
          toogleMenu();
        }}
      >
        Contact
      </button>
    </div>
  );
}

export default Menu;
