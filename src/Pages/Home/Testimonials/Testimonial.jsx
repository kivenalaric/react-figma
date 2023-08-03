import React from 'react';
import TestimonialCss from './Testimonial.module.css';
import TestimonialCards from './TestimonialImg';

export default function Testimonial() {
  return (
    <div className={TestimonialCss.Testimonial__main}>
      {TestimonialCards.map((data) => {
        return (
          <div className={TestimonialCss.Testimonial__card} key={data.id}>
            <img src={data.src} alt={data.Name} />
            <div className={TestimonialCss.Testimonial__text}>
              <h2>{data.Name}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
