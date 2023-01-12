import React from 'react';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
import PackagesCss from './Packages.module.css';

export default function Packages() {
  return (
    <div className={PackagesCss.package_main}>
      <StickyBar />
      <div>
        <NavBar />
        <div className={PackagesCss.texts}>
          <h1>Get THere Mehn</h1>
          <div className={PackagesCss.texts_p}>
            <p>Discover The Land Of A Thousand Hills</p>
          </div>
        </div>
      </div>
    </div>
  );
}
