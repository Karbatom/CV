import React from "react";

import { AiFillLinkedin } from "react-icons/ai";
import ProfilePhoto from './img/MeProfile 09.png';

import './css/Profile.css';

export default function Profile()  {

  const iconsSize = '25px';
  const iconsColor = '#fff';
  
  const renderProfile = (
    <>
      <img src={ProfilePhoto} alt="Logo" />
      <div className="Profile-Info">
        <div className="Profile-Info-Name"><strong>Tomáš KARBAN</strong></div>
        <div className="Highligh-Green-Text"><strong>Developer</strong></div>
        <div className="Profile-Info-Contact"><span><a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-karban-a88b81252/" target="_blank" rel="noreferrer"><AiFillLinkedin color={iconsColor} size={iconsSize}/></a></span></div>
      </div>
    </>
  );

  return(
    <div className='Profile-Section'>
      <div className="Profile-Design">
        {renderProfile}
      </div>
    </div>
  );
}