import React, { useContext } from 'react';
import MyContext from '../../contexts/contexts';
import Menu from './Menu';
import { MenuIcon } from '../Icons';
import MMenuCss from './MobileM.module.css';

function MobileM() {
  const { openMenu, toogleMenu } = useContext(MyContext);
  return (
    <div className={MMenuCss.m_main}>
      <MenuIcon onClick={toogleMenu} />
      {openMenu && <Menu />}
    </div>
  );
}

export default MobileM;
