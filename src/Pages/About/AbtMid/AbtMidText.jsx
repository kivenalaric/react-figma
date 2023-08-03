import React from 'react';
import AbtMidCss from './AbtMid.module.css';
import Button from '../../../Components/Button/Button';

export default function AbtMidText() {
  return (
    <div className={AbtMidCss.abt__welcome}>
      <div className={AbtMidCss.lefth_btn}>
        <Button text="Book Now" color="#c7923c" />
      </div>
      <h1>Welcome To Africa Wizzy Safari</h1>
      <hr />
    </div>
  );
}
