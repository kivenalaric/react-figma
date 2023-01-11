import React from 'react';
import StickyBar from '../../Components/StickyBar/StickyBar';
import NavBar from '../../Components/NavBar/NavBar';
import Hero from './Hero/Hero';
import Bookings from './Booking/Booking';

export default function Home() {
  return (
    <div className="main_home">
      <StickyBar />
      <NavBar />
      <Hero />
      <Bookings />
    </div>
  );
}
