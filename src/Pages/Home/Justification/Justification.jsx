import React from 'react';
import JustificationCss from './Justification.module.css';
import Car from '../../../assets/images/CarOutlined.png';
import Cheked from '../../../assets/images/CheckCircleOutlined.png';
import Contacts from '../../../assets/images/ContactsOutlined.png';
import Like from '../../../assets/images/LikeOutlined.png';

export default function Justification() {
  return (
    <div className={JustificationCss.Justification__main}>
      <div className={JustificationCss.Justification__info}>
        <img src={Car} alt="car" />
        <p>100+ tours around Rwanda</p>
      </div>
      <div className={JustificationCss.Justification__info}>
        <img src={Cheked} alt="checked" />
        <p>100% Trusted travel agency</p>
      </div>
      <div className={JustificationCss.Justification__info}>
        <img src={Contacts} alt="contact-card" />
        <p>10 years of travel experience</p>
      </div>
      <div className={JustificationCss.Justification__info}>
        <img src={Like} alt="liked" />
        <p>90% of travelors are happy</p>
      </div>
    </div>
  );
}
