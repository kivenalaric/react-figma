import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import StickyBarCss from './StickyBar.module.css';

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
        <FaFacebookF className={StickyBarCss.social_icons} />
        <FaTwitter className={StickyBarCss.social_icons} />
        <FaLinkedinIn className={StickyBarCss.social_icons} />
        <AiFillInstagram className={StickyBarCss.social_icons} />
        {/* <i className="fa fa-facebook" />
        <i className="fa fa-twitter" />
        <i className="fa fa-linkedin" />
        <i className="fa fa-instagram" /> */}
      </div>
    </div>
  );
}
