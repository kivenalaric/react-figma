import React from 'react';
import StickyBarCss from './StickyBar.module.css';

export default function StickyBar() {
  return (
    <div className={StickyBarCss.sticky__main}>
      <div className={StickyBarCss.sticky__contacts}>
        <div>
          <i className="fa fa-phone" />
          <span className={StickyBarCss.sticky__phone}>+250 784 688 641</span>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <span className={StickyBarCss.sticky__email}>
            bbonteemma@gmail.com
          </span>
        </div>
      </div>

      <div className={StickyBarCss.sticky__social}>
        <i className="fa fa-facebook" />
        <i className="fa fa-twitter" />
        <i className="fa fa-linkedin" />
        <i className="fa fa-instagram" />
      </div>
    </div>
  );
}
