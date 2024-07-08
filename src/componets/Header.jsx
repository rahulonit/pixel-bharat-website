import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../assets/menu-icon.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg';
import { ReactComponent as NavbarArrow } from '../assets/navbar-arraow.svg';
import NewLogo from '../assets/logo.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

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
      document.querySelectorAll('.blur-section').forEach((el) => el.classList.add('blurred-section'));
      CursorColorWhite();
    } else {
      document.querySelectorAll('.blur-section').forEach((el) => el.classList.remove('blurred-section'));
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
  const textheadRef = useRef(null);
  const cus1Ref = useRef(null);
  const cus2Ref = useRef(null);
  const cus3Ref = useRef(null);
  const cus4Ref = useRef(null);
  const cus5Ref = useRef(null);
  const cus6Ref = useRef(null);
  const cus7Ref = useRef(null);
  const cus8Ref = useRef(null);
  const cus9Ref = useRef(null);
  const cus10Ref = useRef(null);

  useGSAP(() => {
    const texthead = textheadRef.current;
    const cus1 = cus1Ref.current;
    const cus2 = cus2Ref.current;
    const cus3 = cus3Ref.current;
    const cus4 = cus4Ref.current;
    const cus5 = cus5Ref.current;
    const cus6 = cus6Ref.current;
    const cus7 = cus7Ref.current;
    const cus8 = cus8Ref.current;
    const cus9 = cus9Ref.current;
    const cus10 = cus10Ref.current;

    gsap.from(texthead, {
      x: -400,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: texthead,
        markers: false,
        start: 'top 100%'
      }
    });

    gsap.from(cus1, {
      yPercent: 350,
      duration: 2.3,
      ease: 'power4',
      smooth: 1
    });
    gsap.from(cus2, {
      yPercent: 200,
      duration: 1.6,
      smooth: 1
    });
    gsap.from(cus3, {
      yPercent: 200,
      duration: 1.9,
      smooth: 1
    });
    gsap.from(cus4, {
      yPercent: 200,
      duration: 2,
      smooth: 1
    });
    gsap.from(cus5, {
      yPercent: 200,
      duration: 2.2,
      smooth: 1
    });
    gsap.from(cus6, {
      yPercent: 200,
      duration: 2.4,
      smooth: 1
    });
    gsap.from(cus7, {
      yPercent: 200,
      opacity: 0,
      duration: 1.2,
      smooth: 1
    });
    gsap.from(cus8, {
      x: -900,
      duration: 1.8,
      smooth: 1
      // stagger: 2,
      // scrollTrigger: {
      //   trigger: cus8Ref.current,
      //   markers: false,
      //   start: 'top 150%'
      // }
    });
    gsap.from(cus9, {
      y: 200,
      opacity: 0,
      duration: 1.3,
      smooth: 1
      // scrollTrigger: {
      //   trigger: cus9,
      //   markers: false,
      //   start: "top 150%"
      // }
    });

    gsap.from(cus10, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: 'bottom 120%'
      }
    });
  });
  return (
    <div className="bg-gray-100 sticky top-0 z-50 shadow-md shadow-gray-100" onClick={closeSidebar}>
      <div className="">
        {/* Sidebar */}
        <div className={`absolute flex w-full flex-[1_0_0] bg-[#ffffffc7] backdrop-blur-lg self-stretch min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-3000 ${sidebarOpen ? '' : '-translate-x-full'}`} id="sidebar" onClick={toggleSidebar}>
          <div className="flex bg-black p-8 w-[460px]" onMouseEnter={CursorColorWhite} onMouseLeave={CursorColorBlack}>
            <div className="p-4 flex flex-col justify-between w-full">
              <div className="flex">
                <button className="flex w-[50px] h-[50px] p-[26px] justify-center items-center gap-[10px] rounded-full border-2" onClick={toggleSidebar} onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                  <CloseIcon className="w-[16px] h-[16px] flex-shrink-0 fill-[#FFF]" />
                </button>
              </div>
              <ul className="mt-4 flex flex-col space-y-4 transition-all duration-300 ease-in-out">
                <li className="relative">
                  <Link to="/project" className="text-white text-[32px] flex items-center space-x-2 group">
                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <NavbarArrow />
                    </span>
                    <p className="transition-all duration-300 ease-in-out group-hover:pl-4">Projects</p>
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
                  <Link to="/contact" className="text-white text-[32px] flex items-center space-x-2 group" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <NavbarArrow />
                    </span>
                    <span className="transition-all duration-300 ease-in-out group-hover:pl-4">Contact Us</span>
                  </Link>
                </li>
              </ul>

              <div className="flex space-x-4 mt-4">
                <a href="">
                  <FacebookIcon className="w-12 h-12 text-white" />
                </a>
                <a href="">
                  <TwitterIcon className="w-12 h-12 text-white" />
                </a>
                <a href="">
                  <InstagramIcon className="w-12 h-12 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-white [box-shadow:0px]">
            <div className="lg:px-8 px-4 py-3">
              <div className="flex lg:justify-between justify-start items-center">
                <button className="flex w-[50px] h-[50px] p-[26px] justify-center items-center gap-[10px] border-gray-400 rounded-full border-2 hover:border-black" id="open-sidebar" onClick={toggleSidebar} onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                  <MenuIcon className="w-[20px] h-[12px] flex-shrink-0 fill-[#141414]" />
                </button>

                <div className="lg:pl-16 pl-10" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                  <Link to={'/'}>
                    <img src={NewLogo} alt="" />
                  </Link>
                </div>

                <Link to={'/contact'}>
                  <button className="hidden  hide sm:flex lg:px-8 px-3 py-3 justify-center items-start gap-[8px] rounded-full bg-black text-[16px] font-semibold leading-[18px] text-white hover:shadow-xl hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black border-[1px] border-black" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
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
