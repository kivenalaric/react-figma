import React from 'react';
import SliderBtnCss from './Sliderbtn.module.css';

export default function SliderBtn() {
  return (
    <div className={SliderBtnCss.slider__btn}>
      <button type="button" className={SliderBtnCss.slider__btn1}>
        &lang;
      </button>
      <button type="button" className={SliderBtnCss.slider__btn2}>
        &rang;
      </button>
    </div>
  );
}
