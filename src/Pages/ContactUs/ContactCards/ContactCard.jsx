import React from 'react';
import CCardCss from './ContactCard.module.css';

export default function ContactCards() {
  return (
    <div className={CCardCss.concard__main}>
      <div className={CCardCss.concard__cards}>
        <h3>Social Media</h3>
        <div className={CCardCss.concard__social}>
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-twitter" />
          <i className="fa fa-linkedin" aria-hidden="true" />
        </div>
      </div>
      <div className={CCardCss.concard__cards}>
        <h3>Email & Phone</h3>
        <div className={CCardCss.concard__contact}>
          <span>
            <i className="fa fa-phone" /> +250 784 688 641
          </span>
          <span>
            <i className="fa fa-envelope" /> bbonteema@gmail.com
          </span>
        </div>
      </div>
      <div className={CCardCss.concard__cards}>
        <h3>Adress</h3>
        <div className={CCardCss.concard__addtext}>
          <p>kk 600 st</p>
          <p>Kigal, Rwanda</p>
        </div>
      </div>
    </div>
  );
}
