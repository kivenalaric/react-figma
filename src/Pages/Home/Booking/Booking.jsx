import React from 'react';
import Booking from './Booking.module.css';
import Button from '../../../Components/Button/Button';

export default function Bookings() {
  return (
    <div className={Booking.booking_main}>
      <div className={Booking.search}>
        <input type="text" placeholder="Search activities or Destinations" />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
      <div className={Booking.filter}>
        <div className={Booking.filter_texts}>
          <p>Guest</p>
          <div className={Booking.filter_hard}>
            <h4>2 Adult</h4>
            <i className="fa fa-angle-down" />
          </div>
        </div>
        <div className={Booking.filter_texts}>
          <p>Date</p>
          <div className={Booking.filter_hard}>
            <h4>12 - 13 - April 2021</h4>
            <i className="fa fa-angle-down" />
          </div>
        </div>
        <div className={Booking.filter_texts}>
          <p>Package</p>
          <div className={Booking.filter_hard}>
            <h4>All</h4>
            <i className="fa fa-angle-down" />
          </div>
        </div>
      </div>
      <div className={Booking.filter_btn}>
        <Button text="Book Now" />
      </div>
    </div>
  );
}
