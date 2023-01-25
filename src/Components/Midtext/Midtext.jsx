import React from 'react';
import MidtextCss from './Midtext.module.css';

// eslint-disable-next-line react/prop-types
export default function Midtext({ text2, text3 }) {
  return (
    <div className={MidtextCss.midtext_main}>
      <h3>{text2}</h3>
      <h1>{text3}</h1>
    </div>
  );
}
