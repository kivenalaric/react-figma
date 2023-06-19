import React from 'react';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
import AbtImgs from './AbtMid/AbtImgs';
import Footer from '../../Components/Footer/footer';
import AboutCss from './About.modules.css';
import AbtMidText from './AbtMid/AbtMidText';
import AbtHeroSec from './AbtHeroSec/AbtHeroSec';

export default function About() {
  return (
    <div className={AboutCss.about__main}>
      <StickyBar />
      <div className={AboutCss.about__nav}>
        <NavBar />
      </div>
      <AbtHeroSec />
      <AbtMidText />
      <AbtImgs />
      <Footer />
    </div>
  );
}
