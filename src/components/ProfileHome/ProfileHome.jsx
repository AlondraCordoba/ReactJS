import React from 'react';
import photo from '../../assets/img/Photo.jpg';
import './ProfileHome.css';

const Profile = () => {
  return (
    <div className="Profile">
      <div className="Profile-left">
        <div className="Profile-image-wrapper">
          <img src={photo} alt="" />
        </div>
        <h2>Alondra Cordoba</h2>
        <h3>ICT Student</h3>
      </div>
      
      <div className="Profile-right">
        <p>
        I am a student in the career of Information and 
        Communication Technologies (ICT), I am currently 
        finishing TSU, then I would like to study engineering 
        corresponding to my career and if possible work in 
        this area, this in order to develop myself more in the 
        personal field.
        </p>

        <p>
        I am a very dedicated person and to a certain extent a 
        perfectionist with what I do, also, something that I 
        like to put into practice is to try to have a balance in 
        all aspects such as professional and personal.
        </p>

        <p>
        Finally I am someone who likes to learn on my own 
        and improve as I do things, learn and apply myself 
        to try not to make mistakes again, in order to be 
        better in those aspects.
        </p>

      </div>
    </div>
  );
};

export default Profile;
