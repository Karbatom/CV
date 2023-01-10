import React from "react";

import './css/Thanks.css';
import { BiMobileAlt, BiQuestionMark } from "react-icons/bi";

export default function Thanks() {
  
  const iconsColor = '#49a572';
  const iconsSize = '40px';

  return(
    <div className='WideSection'>
      <div className="Services-Container">
        <div>
          <p>
            <BiQuestionMark color={iconsColor} size={iconsSize}/>
          </p>
          <p>
            <strong className='Titles'>tomas.karban98@gmail.com</strong>
          </p>
          <p>
            Veškeré otázky na e-mail
          </p>
        </div>
        <div>
          <p>
            <BiMobileAlt color={iconsColor} size={iconsSize}/>
          </p>
          <p>
            <strong className='Titles'>+420 *** *** ***</strong>
          </p>
          <p>
            Na vyžádání přes e-mail
          </p>
        </div>
      </div>
      <div className="TitleMiddle">
        <strong className="MainTitle"><i>DĚKUJI ZA VÁŠ ČAS</i></strong>
      </div>
    </div>
  );
}