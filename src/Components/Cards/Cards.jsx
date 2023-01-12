import React from 'react';
import CardCss2 from './Cards.module.css';
import Button from '../Button/Button';
import CardS from './CardImages';

export default function Card() {
  return (
    <div className={CardCss2.card_main}>
      {CardS.map((data) => {
        return (
          <div className={CardCss2.card_images}>
            <img src={data.image} alt={data.title} />
            <div className={CardCss2.cardText}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <Button text="Learn More" color="#c7923c" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
