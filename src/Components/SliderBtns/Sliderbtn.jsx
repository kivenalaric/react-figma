/* eslint-disable react/button-has-type */
import React from 'react';
import SliderBtnCss from './Sliderbtn.module.css';

export default function SliderBtn() {
  return (
    <div className={SliderBtnCss.slider__btn}>
      <button>&lang;</button>
      <button>&rang;</button>
    </div>
  );
}
