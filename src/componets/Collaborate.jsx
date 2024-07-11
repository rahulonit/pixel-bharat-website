import React from 'react';
import { useState } from 'react';
import VideoPoster from '../assets/video-poster.png'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const VideoBackground = ({isOpen,onClose}) => {

  const video = require('../assets/vedio.mp4'); // Ensure correct path and naming
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  const textheadRef = useRef(null)
  const cus1Ref = useRef(null)
  const cus2Ref = useRef(null)
  const cus3Ref = useRef(null)
  const handleMouseEnterContact = () => {
    setIsHoveringContact(true);
    const dotElement = document.getElementById('dot');
    if (dotElement) {
      dotElement.classList.add('remove');
    }
  };



  const handleMouseLeaveContact = () => {
    setIsHoveringContact(false);
    const dotElement = document.getElementById('dot');
    if (dotElement) {
      dotElement.classList.remove('remove');
    }
  };
 
  useGSAP(() => {
    const texthead = textheadRef.current
    const cus1 = cus1Ref.current
    const cus2 = cus2Ref.current
    const cus3 = cus3Ref.current

    gsap.from(cus1, {
      y: 400,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus1,
        markers: false,
        start: "top 100%"
      }
    })
  })
  return (
    <div ref={cus1Ref} className="flex justify-center items-center">
      <div className="relative flex w-full max-w-[calc(100%-64px)] h-[550px] px-8 flex-col my-10 justify-center items-center rounded-[36px] overflow-hidden">
        {/* Video element */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}  // Video source from imported variable
          autoPlay  // Autoplay the video
          loop  // Loop the video
          muted  // Mute the video
          playsInline  // Allows video to play inline on iOS devices
          poster= {VideoPoster}
          alt= 'Vedio Here'
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 rounded-[36px]"
        ></div>
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#141414]">
          <h1 className="text-[#141414] text-[36px] sm:text-[48px] text-center md:text-[56px] lg:text-[64px] font-bold">Let's Collaborate</h1>
          {/* Button */}
          <button  className='py-3 px-8 rounded-[100px] bg-black text-white text-[16px] font-semibold hover:shadow-xl border-[1px] border-black hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black'
          onMouseEnter={handleMouseEnterContact}
          onClick={isOpen} 
          onMouseLeave={handleMouseLeaveContact}>
            Start Now!
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default VideoBackground;
