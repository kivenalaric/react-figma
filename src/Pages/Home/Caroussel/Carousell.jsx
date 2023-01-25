import React from 'react';
import CarousellImg from './CarousellImg';
import CarousellCss from './Carousell.module.css';

export default function Carousell() {
  return (
    <div className={CarousellCss.carousell__main}>
      <div className={CarousellCss.carousell__sliderimg}>
        {CarousellImg.map((data, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div className={CarousellCss.carousell__slider} key={index}>
              <img src={data.scr} alt={data.title} />
              <div className={CarousellCss.carousell__slidertext}>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
