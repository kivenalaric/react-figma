import React from 'react';
import AbtHeroSec from './AbtHeroSec/AbtHeroSec';
import AbtImgs from './AbtMid/AbtImgs';
import AboutCss from './About.modules.css';
import AbtMidText from './AbtMid/AbtMidText';

export default function About() {
  return (
    <div className={AboutCss.about__main}>
      <AbtHeroSec />
      <AbtMidText />
      <AbtImgs />
    </div>
  );
}
