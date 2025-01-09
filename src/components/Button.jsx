import React from 'react';
import '../styles/formButton.scss';

export function Button({children, onClick, type = 'button'}) {
  return (
    <button className="form__button btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
