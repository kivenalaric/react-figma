import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
import AboutCss from './About.modules.css';

export default function About() {
  const navigate = useNavigate();

  const goAfter = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="main_home">
      <StickyBar />
      <div>
        <NavBar />
        <div className={AboutCss.hero2_text}>
          <h1>Get THere Mehn</h1>
          <p>Discover The Land Of A Thousand Hills</p>
          <Link to="/">Go Tiff</Link>
          <button onClick={goAfter} type="button">
            Go Tiff
          </button>
        </div>
      </div>
    </div>
  );
}
