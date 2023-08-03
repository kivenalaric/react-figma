import React from 'react';
import HomeCss from './Home.module.css';

export default function HrLines() {
  return (
    <div className={HomeCss.hr__lines}>
      <hr className={HomeCss.color1__line} />
      <hr className={HomeCss.color2__line} />
      <hr className={HomeCss.color2__line} />
    </div>
  );
}
