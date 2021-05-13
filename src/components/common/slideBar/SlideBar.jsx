import React from 'react';
import Nav from '../nav/Nav';
import './SlideBar.css';

const SlideBar = (props) => {
  const handleNavigation = (selectedItem) => () => props.onNav(selectedItem);

  return (
    <div className="SlideBar">
      {props.items.map(item => (
        <Nav
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

export default SlideBar;