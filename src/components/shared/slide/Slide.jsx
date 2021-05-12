import React from 'react';
import NavBar from '../navbar/Navbar';
import './Slide.css';

const Slide = (props) => {
  const handleNavigation = (selectedItem) => () => props.onNav(selectedItem);

  return (
    <div className="Slide">
      {props.items.map(item => (
        <NavBar
          key={item.title}
          title={item.title}
          vertical
          selected={item.id === props.selected}
          onNav={handleNavigation(item.id)}
        />
      ))}
    </div>
  );
};

export default Slide;