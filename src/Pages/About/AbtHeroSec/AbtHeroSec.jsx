import React from 'react';
import Button from '../../../Components/Button/Button';
import AbtHeroCss from './AbtHero.module.css';

export default function AbtHeroSec() {
  return (
    <div className={AbtHeroCss.abthero__main}>
      <div className={AbtHeroCss.abthero__left}>
        <h1>We are dedicated to providing the best travel experience.</h1>
        <p>Discover the Land of a Thousand Hills</p>
        <div className={AbtHeroCss.abt__booking}>
          <div className={AbtHeroCss.abthero__dropdown}>
            <div className={AbtHeroCss.abt__select}>
              <p id="guest">Guest</p>
              <select>
                <option htmlFor="guest">2 adults</option>
              </select>
            </div>
            <div className={AbtHeroCss.abt__select}>
              <p id="date">Date</p>
              <select>
                <option htmlFor>12 - 13 April 2021</option>
              </select>
            </div>
            <div className={AbtHeroCss.abt__select}>
              <p id="pack">Package</p>
              <select>
                <option htmlFor>Akagera Tour</option>
              </select>
            </div>
          </div>
          <div className={AbtHeroCss.lefth_btn}>
            <Button text="Book Now" color="#c7923c" />
          </div>
        </div>
      </div>
      <div className={AbtHeroCss.abthero__right} />
    </div>
  );
}
