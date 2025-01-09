import '../styles/menu.scss';
import React from 'react';
import { forwardRef } from 'react';

export const Menu = forwardRef(({active, onToggleMenu}, ref) => {
  let className = 'menu';

  if (active) {
    className += ' menu_open';
  } 

  return (
    <div className={className} ref={ref} onClick={onToggleMenu}>
      <div className="menu__line"></div>
      <div className="menu__line"></div>
      <div className="menu__line"></div>
    </div>
  );
});

