/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '../../../Components/Button/Button';
import AbtHeroCss from './AbtHero.module.css';

export default function HeroSection() {
  return (
    <div className={AbtHeroCss.abthero__main}>
      <div className={AbtHeroCss.abthero__left}>
        <h1>We are dedicated to providing the best travel experience.</h1>
        <p>Discover the Land of a Thousand Hills</p>
        <div className={AbtHeroCss.abthero__dropdown}>
          <label htmlFor="guest" id="guest">
            Guest
          </label>
          <select>
            <option htmlFor="guest">2 adults</option>
          </select>
          <label htmlFor="date" id="date">
            Guest
          </label>
          <select>
            <option htmlFor>2 adults</option>
          </select>
          <label htmlFor="pack" id="pack">
            Guest
          </label>
          <select>
            <option htmlFor>2 adults</option>
          </select>
          <div className={AbtHeroCss.abthero__empty} />
          <Button text="Book Now" color="#c7923c" />
        </div>
      </div>
      <div className={AbtHeroCss.abthero__right} />
    </div>
  );
}
