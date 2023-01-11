import React from 'react';
import Booking from './Booking.module.css';
import Icon from '../../../assets/images/icon.png';
import Button from '../../../Components/Button/Button';

export default function Bookings() {
  return (
    <div className={Booking.booking_main}>
      <div className={Booking.search}>
        <input type="text" value="" placeholder="Search activities or Destinations" />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
      <div className={Booking.filter}>
        <div className={Booking.filter_texts}>
          <p>Guest</p>
          <div className={Booking.filter_hard}>
            <h4>2 Adult</h4>
            <img src={Icon} alt="" />
          </div>
        </div>
        <div className={Booking.filter_texts}>
          <p>Date</p>
          <div className={Booking.filter_hard}>
            <h4>12 - 13 - April 2021</h4>
            <img src={Icon} alt="" />
          </div>
        </div>
        <div className={Booking.filter_texts}>
          <p>Package</p>
          <div className={Booking.filter_hard}>
            <h4>All</h4>
            <img src={Icon} alt="" />
          </div>
        </div>
      </div>
      <div className={Booking.filter_btn}>
        <Button text="Book Now" />
      </div>
    </div>
  );
}
