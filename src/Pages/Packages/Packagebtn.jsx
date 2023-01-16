/* eslint-disable react/button-has-type */
import React from 'react';
import PackageBtnCss from './Packages.module.css';

export default function PackageBtn() {
  return (
    <div className={PackageBtnCss.pack__btn}>
      <button className={PackageBtnCss.pack__btn1}>&lang;</button>
      <button className={PackageBtnCss.pack__btn2}>&rang;</button>
    </div>
  );
}
