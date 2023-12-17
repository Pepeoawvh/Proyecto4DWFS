
import React, { useState } from 'react';
import '../styles/banner.css'
import '../styles/textos.css'
import { Card, Card2 } from './Cards';


 export const Banner = () => {

  // const [isCard2, setIsCard2] = useState(false);

  // const handleClick = () => {
  //     setIsCard2(!isCard2);
  // };

 return (
<> 
<div className="bannerContainer">
      <div className="centrar-imagen">
        <img
          src="/img/Banners/Bienvenido.png"
          alt="Banner"
          className="bannerImgRatita"
        />
      </div>
    </div>
</>

  

 );
};


 

