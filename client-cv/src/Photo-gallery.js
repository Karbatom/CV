import React from "react";

import "./css/PhotoGallery.css";

import Img0 from './img/blender/b_img (1).JPG';
import Img2 from './img/blender/b_img (14).JPG';
import Img3 from './img/blender/b_img (10).JPG';
import Img4 from './img/blender/b_img (13).JPG';
import Img5 from './img/blender/b_img (12).JPG';
import Img7 from './img/blender/b_img (17).jpg';
import Img8 from './img/blender/b_img (18).jpg';


export default function PhotoGallery() {

  return(
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
  );
}