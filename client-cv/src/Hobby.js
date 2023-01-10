import React from "react";

import PhotoGallery from "./Photo-gallery";
import PawTrailLogo from './img/PawTrailLogo.png';

import './css/Hobby.css';

import Img0 from './img/blender/b_img (1).JPG';
import Img2 from './img/blender/b_img (14).JPG';
import Img3 from './img/blender/b_img (10).JPG';
import Img4 from './img/blender/b_img (13).JPG';
import Img5 from './img/blender/b_img (12).JPG';
import Img7 from './img/blender/b_img (17).jpg';
import Img8 from './img/blender/b_img (18).jpg';

import MTB_1 from './img/mtb/MTB (1).jpg';
import MTB_2 from './img/mtb/MTB (2).jpg';
import MTB_3 from './img/mtb/MTB (3).jpg';
import MTB_4 from './img/mtb/MTB (4).jpg';
import MTB_5 from './img/mtb/MTB (5).jpg';
import MTB_6 from './img/mtb/MTB (6).jpg';
import MTB_7 from './img/mtb/MTB (7).jpg';
import MTB_8 from './img/mtb/MTB (8).jpg';
import MTB_9 from './img/mtb/MTB (9).jpg';
import MTB_10 from './img/mtb/MTB (10).jpg';
import MTB_11 from './img/mtb/MTB (11).jpg';


export default function Hobby() {

  return(
    <div>
    <div className='Section-SmallMiddle'>
      <div>
        <strong className="Titles MainTitle">Koníčky</strong>
      </div>
      <div>
        <p className="Paragraf">
        Osobně jsem vášnivý sportovec co se týče stolního tenisu, beach volejbalu, běžek, squashe, horskéhé kola a pravidělně návštěvujeme místní bike parky. Stolní tenis hraju za sportovní klub Český Brod a ostatní sporty pouze rekreačně.
        </p>
        <p className="Paragraf">
        Když vynechám adrenalin ze sjíždění downhillu v bike parcích, jsem zároveň fanda sci-fi a fantasy filmů od Marvelu, DC a celkové myšlence propracovanosti komiksů. Nemohu zde chybět ani seriály ať už nové či staré jako HIMYM nebo TBBT.
        </p>
      </div>
      <div>
        <br />
      </div>
      <div>
        <div>
          <strong className="Titles SecondTitle">Blender 3D</strong>
        </div>
        <p className="Paragraf">
        Pokud vynechám sporty či seriály, tak relaxuji nad modelování 3D objektů pomocí Blender 3D. Kde se snažím, aby moje tvorba byla kvalitní a použitelná pro vývoj her v Unity 3D.
        </p>
        <p className="Paragraf Note">
        Ukázka projektů, které jsem tvořil za pomocí Blender 3D viz. galerie...
        </p>
      </div>
    </div>
      <div className='WideSection'>
        {/* Blender galery */}
        <div className="container">
          <h2 className="heading-text">Photo <span>gallery</span></h2>
          <div className="image-gallery">
            <div className="column">
              <div className="image-item">
                <img src={Img0} alt="" />
              </div>
              <div className="image-item">
                <img src={Img4} alt="" />
              </div>
              <div className="image-item">
                <img src={Img5} alt="" />        
              </div>
            </div>
            <div className="column">
              <div className="image-item">
                <img src={Img7} alt="" />
              </div>
              <div className="image-item">
                <img src={Img8} alt="" />
              </div>
            </div>
            <div className="column">
            <div className="image-item">
                <img src={Img2} alt="" />
              </div>
              <div className="image-item">
                <img src={Img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blender galery */}
    <div className='Section-SmallMiddle'>
      <div>
        <br />
      </div>
      <div>
        <div>
          <strong className="Titles SecondTitle">Youtube</strong>
        </div>
        <p className="Paragraf">
        Jelikož jsem začal jezdit MTB, tak jsem moje výsledky převedl do video formy a tvořím obsah na Youtube. Youtube jsem pojal jako další nástroj na grafickou tvorbu ale tentokrát za pomocí videí. Můj youtube kanál je poměrně nový a testuji, co vše se tam dá vytvořit.
        </p>
        <p className="Paragraf Note">
        Ukázka záběrů z mého cestování viz. galerie a odkaz na můj youtube kanál...
        </p>
      </div>
    </div>
      <div className='WideSection'>
        {/* youtube galery */}
        <div className="container">
          <h2 className="heading-text">Photo <span>gallery</span></h2>
          <div className="image-gallery">
            <div className="column">
              <div className="image-item">
                <img src={MTB_1} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_2} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_3} alt="" />        
              </div>
              <div className="image-item">
                <img src={MTB_10} alt="" />        
              </div>
            </div>
            <div className="column">
              <div className="image-item">
                <img src={MTB_4} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_5} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_6} alt="" />
              </div>
            </div>
            <div className="column">
              <div className="image-item">
                <img src={MTB_7} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_8} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_9} alt="" />
              </div>
              <div className="image-item">
                <img src={MTB_11} alt="" />        
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className='Section-SmallMiddle'>
      {/* youtube galery */}
      <div className="YoutubeLink">
        <a href="https://www.youtube.com/channel/UCJHgFW_WHWB2o_-czCVSMYQ" title="Youtube kanál: PawTrail">
          <img src={PawTrailLogo} alt="Logo" className="PawTrailLogo" title="Youtube kanál: PawTrail"/>
        </a>
      </div>
    </div>
    </div>
  );
}