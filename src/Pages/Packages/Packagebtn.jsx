import React from 'react';
import PackageBtnCss from './Packages.module.css';

export default function PackageBtn() {
  return (
    <div className={PackageBtnCss.pack__btn}>
      <button type="button" className={PackageBtnCss.pack__btn1}>
        &lang;
      </button>
      <button type="button" className={PackageBtnCss.pack__btn2}>
        &rang;
      </button>
    </div>
  );
}
