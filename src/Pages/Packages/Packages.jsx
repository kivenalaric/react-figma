import React from 'react';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
import NextH from '../../Components/NextH/NextH';
import PackagesCss from './Packages.module.css';
import Card from '../../Components/Cards/Cards';
import Footer from '../../Components/Footer/footer';
import Midtext from '../../Components/Midtext/Midtext';

export default function Packages() {
  return (
    <div className={PackagesCss.package_main}>
      <StickyBar />
      <NavBar />
      <NextH text4="Tour Package" text5="Home" text6="Package" />
      <Midtext
        text2="Choose your Package"
        text3="Select your Best Package for your Travel"
      />
      <div className={PackagesCss.pack__card}>
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
