import React from 'react';
import CmidTextCss from './CmidText.module.css';

export default function CmidText() {
  return (
    <div className={CmidTextCss.cmidText__main}>
      <h1>Get in Touch</h1>
      <p>
        We would love to hear from you! If you have any comments or suggestions
        about our website or our tours, please dont hesitate to get in touch. We
        are always looking for ways to improve and make your travel experience
        even better.
      </p>
    </div>
  );
}
