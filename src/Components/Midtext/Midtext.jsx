/* eslint-disable react/prop-types */
import React from 'react';
import MidtextCss from './Midtext.module.css';

export default function Midtext({ text2, text3 }) {
  return (
    <div className={MidtextCss.midtext_main}>
      <h3>{text2}</h3>
      <h1>{text3}</h1>
    </div>
  );
}
