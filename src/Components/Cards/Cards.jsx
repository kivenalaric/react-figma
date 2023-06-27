import React from 'react';
import CardCss2 from './Cards.module.css';
import Button from '../Button/Button';
import CardS from './CardImages';

export default function Card() {
  const styleObj = {
    position: 'absolute',
    left: '0',
    bottom: '0',
    margin: '0 20px 50px',
  };

  return (
    <div className={CardCss2.card_main}>
      {CardS.map((data) => {
        return (
          <div className={CardCss2.card_images} key={data.id}>
            <img src={data.image} alt={data.title} />
            <div className={CardCss2.cardText}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <Button
                text="Learn More"
                color="#c7923c"
                styleObj={styleObj}
                className={CardCss2.card_btn}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
