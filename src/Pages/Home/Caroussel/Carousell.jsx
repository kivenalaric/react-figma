import React from 'react';
import CarousellImg from './CarousellImg';
import CarousellCss from './Carousell.module.css';

export default function Carousell() {
  return (
    <div className={CarousellCss.carousell__main}>
      <div className={CarousellCss.carousell__sliderimg}>
        {CarousellImg.map((data) => {
          return (
            <div className={CarousellCss.carousell__slider} key={data.id}>
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
