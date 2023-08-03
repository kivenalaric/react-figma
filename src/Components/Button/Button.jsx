import React from 'react';
import ButtonCss from './Button.module.css';

// eslint-disable-next-line react/prop-types
export default function Button({ text, color, styleObj }) {
  return (
    <button
      style={{ ...styleObj, backgroundColor: color }}
      className={ButtonCss.button}
      type="submit"
    >
      {text}
    </button>
  );
}
