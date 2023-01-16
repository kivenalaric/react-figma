/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/button-has-type */
import React from 'react';
import FooterCss from './footer.module.css';
import logo from '../../assets/images/logo.svg';

function Footer() {
  return (
    <div className={FooterCss.footer__main}>
      <div className={FooterCss.footer__content}>
        <div className={FooterCss.footer__left}>
          <div className={FooterCss.footer__lefttext}>
            <h3>If you have any question, Let us help you!</h3>
            <div className={FooterCss.footer__leftp}>
              <div className={FooterCss.footer__leftp1}>
                <p>
                  If you have any questions or would like to book a tour with
                  us, please dont hesitate to contact us.
                </p>
              </div>
              <div className={FooterCss.footer__leftp2}>
                <p>Phone: +250 788 123 456</p>
                <p>Email: info@rwandatourism.com </p>
                <p>Address: Kigali, Rwanda</p>
              </div>
              <form>
                <p className={FooterCss.form__lable}>
                  Subscribe to our newspaper
                </p>
                <div className={FooterCss.input__section}>
                  <input
                    className={FooterCss.footer__input}
                    type="text"
                    placeholder="Input your email here"
                  />
                  <button className={FooterCss.footer__sendbtn} type="button">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={FooterCss.footer__right}>
          <div className={FooterCss.footer__righttop}>
            <div className={FooterCss.footer__rightlogo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={FooterCss.footer__sociallinks}>
              <i className="fa fa-facebook" />
              <i className="fa fa-twitter" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-instagram" />
            </div>
          </div>
          <div className={FooterCss.footer__righttext}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={FooterCss.footer__rightlinks}>
            <ul>
              <li>Home</li>
              <li>Testimonials</li>
              <li>Destinations</li>
              <li>Sign In</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>Packages</li>
              <li>Events</li>
              <li>Gallery</li>
            </ul>
            <ul>
              <li>Our Team</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={FooterCss.footer__bottomtxt}>
        <p>Copyright Africa Wizzy Safari 2022</p>
      </div>
    </div>
  );
}

export default Footer;
