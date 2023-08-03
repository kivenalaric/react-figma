import React from 'react';
// import NavBar from '../../Components/NavBar/NavBar';
// import StickyBar from '../../Components/StickyBar/StickyBar';
import NextH from '../../Components/NextH/NextH';
import GalleryCss from './GalleryS.module.css';
import Button from '../../Components/Button/Button';
import GalleryImg from './GalleryImg/GalleryImg';
// import Footer from '../../Components/Footer/footer';

export default function Gallery() {
  return (
    <div className={GalleryCss.gallery__main}>
      {/* <StickyBar />
      <NavBar /> */}
      <NextH text4="Gallery" text5="Home" text6="Gallery" />
      <div className={GalleryCss.gallery__btn}>
        <Button text="Open Instagram" color="#c7923c" />
      </div>
      <GalleryImg />
      {/* <Footer /> */}
    </div>
  );
}
