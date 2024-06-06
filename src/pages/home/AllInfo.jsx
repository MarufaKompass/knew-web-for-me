import React from 'react'
import kompass from "../../assets/image/Kompass_info.jpg";
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function AllInfo() {
  return (
   <div className="">
     <div className='w-full'>
        <img   src={kompass} alt="" className="w-full"/>
    </div>
   </div>
  )
}
