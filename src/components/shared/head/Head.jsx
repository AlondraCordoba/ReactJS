import React from 'react';
import Navbar from '../navbar/Navbar';
import { excerE } from '../../../assets/utils/constants';
import icon from '../../../assets/img/logoArkusN.png';
import './Head.css';

const items = [
  { title: 'Home', id: excerE.PROFILE },
  { title: 'Exercises', id: excerE.EXCERCISES },
];

const Head = (props) => {
  const handleNavigation = (newView) => () => {
    if (newView !== props.view) {
      props.onNav(newView);
    }
  };

  return (
    <header className="Head">
      <div className="Head-icon">
        <img src={icon} alt="" />
      </div>

      {items.map(item => (
        <Navbar
          key={item.title}
          selected={props.view === item.id}
          onNav={handleNavigation(item.id)}
          title={item.title}
        />
      ))}
    </header>
  );
};

export default Head;