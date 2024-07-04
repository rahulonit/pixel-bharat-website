import React from 'react';
import { useState } from 'react';
import VideoPoster from '../assets/video-poster.png'
import CollabPopup from './Collabpopup';

const VideoBackground = () => {
  const video = require('../assets/vedio.mp4'); // Ensure correct path and naming
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // state to manage popup visibility

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };


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

  return (
    <div className="flex justify-center items-center">
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
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 rounded-[36px]"
        ></div>
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#141414]">
          <h1 className="text-[#141414] text-[36px] sm:text-[48px] text-center md:text-[56px] lg:text-[64px] font-bold">Let's collaborate</h1>
          {/* Button */}
          <button className='py-3 px-8 rounded-[100px] bg-black text-white text-[16px] font-semibold hover:shadow-xl border-[1px] border-black hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black'
          onMouseEnter={handleMouseEnterContact}
          onClick={handlePopupOpen} 
          onMouseLeave={handleMouseLeaveContact}>
            Start Now!
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <CollabPopup  onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default VideoBackground;
