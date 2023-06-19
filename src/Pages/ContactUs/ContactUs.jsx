import React from 'react';
// import NavBar from '../../Components/NavBar/NavBar';
// import StickyBar from '../../Components/StickyBar/StickyBar';
import NextH from '../../Components/NextH/NextH';
import ContactCss from './ContactUs.module.css';
// import Footer from '../../Components/Footer/footer';
import CmidText from './ContactMidT/CmidText';
import ContactForm from './ContactForm/ContactForm';
import ContactCards from './ContactCards/ContactCard';

export default function Contact() {
  return (
    <div className={ContactCss.contact__main}>
      {/* <StickyBar />
      <NavBar /> */}
      <NextH text4="Contact Us" text5="Home" text6="Contact" />
      <CmidText />
      <ContactForm />
      <ContactCards />
      {/* <Footer /> */}
    </div>
  );
}
