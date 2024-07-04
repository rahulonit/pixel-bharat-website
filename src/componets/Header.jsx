import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from "../assets/menu-icon.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as CloseIcon } from "../assets/close-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as NavbarArrow } from "../assets/navbar-arraow.svg";
import NewLogo from "../assets/logo.png"

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
    CursorColorBlack();
  }, []);

  const toggleSidebar = () => {
    console.log(sidebarOpen);
    const newSidebarState = !sidebarOpen;

    setSidebarOpen(newSidebarState);
    localStorage.setItem('sidebarOpen', newSidebarState);
    if (newSidebarState) {
      document.querySelectorAll('.blur-section').forEach(el => el.classList.add('blurred-section'));
      CursorColorWhite();
    } else {
      document.querySelectorAll('.blur-section').forEach(el => el.classList.remove('blurred-section'));
      CursorColorBlack();
    }
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

  const CursorColorWhite = () => {
    const dotElement = document.getElementById('dot');
    const ballElement = document.getElementById('ball');

    if (dotElement) {
      dotElement.classList.add('whitedot');
      ballElement.classList.add('whiteball');
    }
  };

  const CursorColorBlack = () => {
    const dotElement = document.getElementById('dot');
    const ballElement = document.getElementById('ball');

    if (dotElement) {
      dotElement.classList.remove('whitedot');
      ballElement.classList.remove('whiteball');
    }
  };

  const closeSidebar = (e) => {
    if (!sidebarOpen) return;
    if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setSidebarOpen(false);
      localStorage.setItem('sidebarOpen', false);
      CursorColorBlack();
    }
  };

  return (
    <div className="bg-gray-100 sticky top-0 z-50 shadow-md shadow-gray-100" onClick={closeSidebar}>
      <div className="">
        {/* Sidebar */}
        <div
          className={`absolute flex w-full flex-[1_0_0] bg-[#ffffffc7] backdrop-blur-lg self-stretch min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 ${sidebarOpen ? '' : '-translate-x-full'}`}
          id="sidebar"
        >
          <div className='flex bg-black p-8 w-[460px]' onMouseEnter={CursorColorWhite} onMouseLeave={CursorColorBlack}>
            <div className="p-4 flex flex-col justify-between w-full">
              <div className="flex">
                <button
                  className="flex w-[50px] h-[50px] p-[26px] justify-center items-center gap-[10px] rounded-full border-2"
                  onClick={toggleSidebar}
                  onMouseEnter={handleMouseEnterContact}
                  onMouseLeave={handleMouseLeaveContact}
                >
                  <CloseIcon className="w-[16px] h-[16px] flex-shrink-0 fill-[#FFF]" />
                </button>
              </div>

              <ul className="mt-4 flex flex-col space-y-4">
                <li className="relative">
                  <Link to="/project" className="text-white text-[32px] flex items-center space-x-2 group">
                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <NavbarArrow />
                    </span>
                    <span className="transition-all duration-300 ease-in-out group-hover:pl-4">Projects</span>
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/team" className="text-white text-[32px] flex items-center space-x-2 group">
                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <NavbarArrow />
                    </span>
                    <span className="transition-all duration-300 ease-in-out group-hover:pl-4">Our Team</span>
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/about-us" className="text-white text-[32px] flex items-center space-x-2 group">
                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <NavbarArrow />
                    </span>
                    <span className="transition-all duration-300 ease-in-out group-hover:pl-4">About Us</span>
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/careers" className="text-white text-[32px] flex items-center space-x-2 group">
                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <NavbarArrow />
                    </span>
                    <span className="transition-all duration-300 ease-in-out group-hover:pl-4">Careers</span>
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/contact" className="text-white text-[32px] flex items-center space-x-2 group"
                    onMouseEnter={handleMouseEnterContact}
                    onMouseLeave={handleMouseLeaveContact}>
                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <NavbarArrow />
                    </span>
                    <span className="transition-all duration-300 ease-in-out group-hover:pl-4">Contact Us</span>
                  </Link>
                </li>
              </ul>

              <div className="flex space-x-4 mt-4">
                <a href=""><FacebookIcon className="w-12 h-12 text-white" /></a>
                <a href=""><TwitterIcon className="w-12 h-12 text-white" /></a>
                <a href=""><InstagramIcon className="w-12 h-12 text-white" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-white [box-shadow:0px]">
            <div className="px-8 py-3">
              <div className="flex justify-between items-center">
                <button
                  className="flex w-[50px] h-[50px] p-[26px] justify-center items-center gap-[10px] border-gray-400 rounded-full border-2 hover:border-black"
                  id="open-sidebar"
                  onClick={toggleSidebar}
                  onMouseEnter={handleMouseEnterContact}
                  onMouseLeave={handleMouseLeaveContact}
                >
                  <MenuIcon className="w-[20px] h-[12px] flex-shrink-0 fill-[#141414]" />
                </button>

                <div className='lg:pl-16' onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                  <Link to={'/'}>
                  <img src= {NewLogo} alt="" /></Link>
                </div>

                <Link to={'/contact'}>
                  <button className="flex lg:px-8 px-3 py-3 justify-center items-start gap-[8px] rounded-full bg-black text-[16px] font-semibold leading-[18px] text-white hover:shadow-xl hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black border-[1px] border-black"
                    onMouseEnter={handleMouseEnterContact}
                    onMouseLeave={handleMouseLeaveContact}>
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}