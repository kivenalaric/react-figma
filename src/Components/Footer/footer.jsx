import React from 'react';
import FooterCss from './footer.module.css';
import logo from '../../assets/images/logo.svg';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from '../Icons';

function Footer() {
  return (
    <div className={FooterCss.footer__main}>
      <div className={FooterCss.footer_maininner}>
        <div className={FooterCss.footer_left}>
          <h2>If you have any question, Let us help you!</h2>
          <div className={FooterCss.footer_leftmid}>
            <div className={FooterCss.footer_leftmid1}>
              <p>
                If you have any questions or would like to book a tour with us,
                please dont hesitate to contact us.
              </p>
            </div>
            <div className={FooterCss.footer_leftmid1}>
              <p>Phone: +250 788 123 456</p>
              <p>Email: info@rwandatourism.com </p>
              <p>Address: Kigali, Rwanda</p>
            </div>
          </div>
          <p className={FooterCss.footer_subscribe}>
            Subscribe to our newspaper
          </p>
          <div className={FooterCss.footer_input}>
            <input type="text" placeholder="Input Your Email Here" />
            <button type="button">
              <MailIcon />
            </button>
          </div>
        </div>
        <div className={FooterCss.footer_right}>
          <div className={FooterCss.footer_righttop}>
            <img src={logo} alt="logo" />
            <div className={FooterCss.footer_icons}>
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className={FooterCss.footer_rightbot}>
            <div className={FooterCss.footer_list}>
              <p>Home</p>
              <p>Testimonials</p>
              <p>Destinations</p>
              <p>signinn</p>
            </div>
            <div className={FooterCss.footer_list}>
              <p>About Us</p>
              <p>Packages</p>
              <p>Events</p>
              <p>Gallery</p>
            </div>
            <div className={FooterCss.footer_list}>
              <p>Our Team</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <p className={FooterCss.footer_copyright}>
        Copyright Africa Wizzy Safari 2022
      </p>
    </div>
  );
}

export default Footer;
