import React from "react";

import './css/Services.css';
import { BiLaptop, BiLayer, BiPyramid, BiBraille } from "react-icons/bi";

export default function Services() {

  const iconsColor = '#49a572';
  const iconsSize = '35px';

  return (
    <div>
      <div>
        <strong className='Titles SecondTitle'>Služby</strong>
      </div>
      <div className="Services-Container">
        <div>
          <p>
            <BiLaptop color={iconsColor} size={iconsSize}/>
          </p>
          <p>
            <strong className='Titles'>Development</strong>
          </p>
          <p className="Service-Text">
          Tvorba webového obsahu, co se týče backendu i frontendu od analýzy, návrhu až po implementaci
          </p>
        </div>
        <div>
          <p>
            <BiLayer color={iconsColor} size={iconsSize}/>
          </p>
          <p>
            <strong className='Titles'>Database</strong>
          </p>
          <p className="Service-Text">
          Základní práce s databázový MSSQL, MongoDB a manipulace s daty
          </p>
        </div>
        <div>
          <p>
            <BiPyramid color={iconsColor} size={iconsSize}/>
          </p>
          <p>
            <strong className='Titles'>Design</strong>
          </p>
          <p className="Service-Text">
          Návrhu a analýzy grafických částí ať už pro webové aplikace tak i vytváření grafických objektu v Blender 3D
          </p>
        </div>
        <div>
          <p>
            <BiBraille color={iconsColor} size={iconsSize}/>
          </p>
          <p>
            <strong className='Titles'>Management</strong>
          </p>
          <p className="Service-Text">
          Základní management co se týče projektů a řízení lidí
          </p>
        </div>
      </div>
    </div>
  );
}