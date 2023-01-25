/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '../../../Components/Button/Button';
import CFormCss from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={CFormCss.contactform__main}>
      <form action="" className={CFormCss.contactform__form}>
        <h3>Contact Us</h3>
        <div className={CFormCss.contactform__names}>
          <div className={CFormCss.contactform__fname}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="Input your First Name in Here" />
          </div>
          <div className={CFormCss.contactform__lname}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Input your Last Name in Here" />
          </div>
        </div>
        <div className={CFormCss.contactform__email}>
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Input your Email Address in Here" />
        </div>
        <div className={CFormCss.contactform__nums}>
          <label htmlFor="phone">Phone Number</label>
          <div className={CFormCss.contactform__selectnum}>
            <select>
              <option value="237">+237</option>
              <option value="237">+234</option>
              <option value="237">+233</option>
            </select>
            <input type="text" placeholder="Input your Phone Number in Here" />
          </div>
        </div>
        <div className={CFormCss.contactform__mgs}>
          <label htmlFor="message">Message</label>
          <textarea cols="4" rows="4" placeholder="Write a message" />
        </div>
        <div className={CFormCss.contactform__btn}>
          <Button text="Submit" color="#C7923E" />
        </div>
      </form>
    </div>
  );
}
