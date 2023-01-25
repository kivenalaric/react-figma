/* eslint-disable react/prop-types */
import React from 'react';
import Hero2Css from './NextH.module.css';
import PlayL from '../../assets/images/playleft.png';

export default function Packages({ text4, text5, text6 }) {
  return (
    <div className={Hero2Css.hero2__main}>
      <div className={Hero2Css.hero2__text}>
        <h1>{text4}</h1>
        <div className={Hero2Css.hero2__choose}>
          <h3 className={Hero2Css.hero2__h3f}>{text5}</h3>
          <img src={PlayL} alt="nextbtn" />
          <h3 className={Hero2Css.hero2__h3s}>{text6}</h3>
        </div>
      </div>
    </div>
  );
}
