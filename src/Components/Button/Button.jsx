import React from 'react';
import ButtonCss from './Button.module.css';

export default function Button({ text }) {
  return (
    <button className={ButtonCss.button} type="submit">
      {text}
    </button>
  );
}
