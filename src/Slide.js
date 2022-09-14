import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Slide() {


    const images = [
        { url: "https://images.pexels.com/photos/13421007/pexels-photo-13421007.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { url: "https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { url: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { url: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600" },
        
      ];
  return (
    <div className='slider'>
   <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        
      />


    </div>
  )
}

export default Slide