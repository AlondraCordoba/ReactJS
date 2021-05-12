import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const classNames = ['Navbar-item'];
  if (props.selected) {
    classNames.push('Navbar-item-selected');
  }

  if (props.vertical) { 
    classNames.push('Navbar-item-vertical');
  }

  return (
    <button
      className={classNames.join(' ')}
      type="button"
      onClick={props.onNav}
    >
      {props.title}
    </button>
  );
};

export default Navbar;