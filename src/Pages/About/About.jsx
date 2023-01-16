import React from 'react';
import { useNavigate } from 'react-router-dom';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
import AbtHero from './AbtHero/AbtHero';
import AbtImgs from './AbtMid/AbtImgs';
import Footer from '../../Components/Footer/footer';
import AboutCss from './About.modules.css';
import AbtMidText from './AbtMid/AbtMidText';

export default function About() {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const goAfter = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className={AboutCss.about__main}>
      <StickyBar />
      <NavBar />
      <AbtHero />
      <AbtMidText />
      <AbtImgs />
      <Footer />
    </div>
  );
}
