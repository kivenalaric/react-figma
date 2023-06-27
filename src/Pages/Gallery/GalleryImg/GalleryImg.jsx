import React from 'react';
import GalleryImg from './Gimages';
import GalleryPics from './GalleryImg.module.css';

export default function GallerPics() {
  return (
    <div className={GalleryPics.gpics__body}>
      {GalleryImg.map((item) => {
        return (
          <div className={GallerPics.gpics__image} key={item.id}>
            <img
              src={item.image}
              style={{ width: '100%' }}
              alt="african images"
            />
          </div>
        );
      })}
    </div>
  );
}
