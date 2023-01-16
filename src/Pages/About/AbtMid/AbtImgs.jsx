/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import AbtImg from './AbtMid';
import AboutCardStyle from './AbtImgs.module.css';

export default function AboutCard() {
  return (
    <div className={AboutCardStyle.about__card}>
      {AbtImg.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className={AboutCardStyle.abtbody__main} key={index}>
            <div className={AboutCardStyle.aboutCard__text}>
              <img src={item.image} alt="about" />
              <div className={AboutCardStyle.abt__desc}>
                <p>{item.desc1}</p>
              </div>
            </div>
            <div className={AboutCardStyle.aboutCard__text1}>
              <div className={AboutCardStyle.abt__desc}>
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt="about" />
            </div>
            <div className={AboutCardStyle.aboutCard__text2}>
              <img src={item.image} alt="about" />
              <div className={AboutCardStyle.abt__desc}>
                <p>{item.description}</p>
              </div>
            </div>
            <div className={AboutCardStyle.aboutCard__text}>
              <img src={item.image} alt="about" />
              <div className={AboutCardStyle.abt__desc}>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
