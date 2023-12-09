
import React, { useState } from 'react';
import '../styles/banner.css'
import Card from './Card';
import Card2 from './Card2';

 export const Banner = () => {

  const [isCard2, setIsCard2] = useState(false);

  const handleClick = () => {
      setIsCard2(!isCard2);
  };


 return (
<> 
      <div className="bannerContainer">
        <div className='bannerImg'></div>
        
        <div className="bannerRight" onClick={handleClick} >
        {isCard2 ? <Card2 /> : <Card />}
        </div>
      </div>
</>

 );
};


 

