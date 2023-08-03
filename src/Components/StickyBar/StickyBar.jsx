import React from 'react';
import StickyBarCss from './StickyBar.module.css';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Icons';
import MobileM from '../MobileMenu/MobileM';

export default function StickyBar() {
  return (
    <div className={StickyBarCss.sticky__main}>
      <div className={StickyBarCss.sticky__contacts}>
        <div className={StickyBarCss.sticky__call}>
          <i className="fa fa-phone" />
          <span className={StickyBarCss.sticky__phone}>+250 784 688 641</span>
        </div>
        <div className={StickyBarCss.sticky__envelope}>
          <i className="fa fa-envelope" />
          <span className={StickyBarCss.sticky__email}>
            bbonteemma@gmail.com
          </span>
        </div>
      </div>

      <div className={StickyBarCss.sticky__social}>
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </div>
      <MobileM />
    </div>
  );
}
