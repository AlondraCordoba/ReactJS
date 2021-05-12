import React from 'react';
import './ProfileHome.css';

const Profile = () => {
  return (
    <div className="Profile">
      <div className="Profile-left">
        <div className="Profile-image-wrapper">
          <img src="../../assets/img/Photo.jpg" alt="" />
        </div>
        <h2>Alondra Cordoba</h2>
        <h3>ICT Student</h3>
      </div>
      
      <div className="Profile-right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici
          elit, sed eiusmod tempor incidunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquid ex ea
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici
          elit, sed eiusmod tempor incidunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi u
        </p>
      </div>
    </div>
  );
};

export default Profile;
