import React from 'react';
import HeroCss from './Hero.module.css';
import Right from '../../../assets/images/rightbtn.png';
import Left from '../../../assets/images/leftbtn.png';

export default function Hero() {
  return (
    <div className={HeroCss.hero_main}>
      <div className={HeroCss.hero_main2}>
        <div className={HeroCss.hero_text}>
          <h1>Experience The Beauty Of Rwanda With Us</h1>
          <p>Discover The Land Of A Thousand Hills</p>
        </div>
        <div className={HeroCss.hero_arrows}>
          <img src={Right} alt="" />
          <img src={Left} alt="" />
        </div>
      </div>
    </div>
  );
}
