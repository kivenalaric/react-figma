import React from 'react';
import HomeCss from './Home.module.css';
// import StickyBar from '../../Components/StickyBar/StickyBar';
// import NavBar from '../../Components/NavBar/NavBar';
import Hero from './Hero/Hero';
import Bookings from './Booking/Booking';
import Midtext from '../../Components/Midtext/Midtext';
import Cards from '../../Components/Cards/Cards';
// import Footer from '../../Components/Footer/footer';
import Testimonial from './Testimonials/Testimonial';
import Justification from './Justification/Justification';
import Carousell from './Caroussel/Carousell';
import SliderBtn from '../../Components/SliderBtns/Sliderbtn';
import HrLines from './HrLines';

export default function Home() {
  return (
    <div className={HomeCss.main_home}>
      {/* <StickyBar />
      <NavBar /> */}
      <Hero />
      <Bookings />
      <Midtext
        text2="Choose Your Package"
        text3="Select your Best Pckage for your Travel"
      />
      <Cards />
      <Midtext
        text2="Popular Destinations"
        text3="Select Our Best Popular Destinations"
      />
      <SliderBtn />
      <Carousell />
      <Midtext text2="Why Us?" text3="Why Travel with Africa wizzy Safari" />
      <Justification />
      <Midtext
        text2="Our-Traveller Say"
        text3="What Our Clients Say About Us"
      />
      <Testimonial />
      <HrLines />
      {/* <Footer /> */}
    </div>
  );
}
