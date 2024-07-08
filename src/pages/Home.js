import React, { useEffect, useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import Marquee from 'react-fast-marquee';
import { ReactComponent as ArrowIcon } from '../assets/arrow-icon.svg';
import { ReactComponent as LockIcon } from '../assets/lockicon.svg';
import { ReactComponent as LoadingIcon } from '../assets/Loading-icon.svg';
import laptop from '../assets/laptop.png';
import TestimonalPic from '../assets/testimonalpic.png';
import FigmaIcon from '../assets/toolsIcons/figma-icon.png';
import XDIcon from '../assets/toolsIcons/XD-ICON.png';
import AeIcon from '../assets/toolsIcons/AE-ICON.png';
import Diamond from '../assets/toolsIcons/diamond-icon.png';
import PsIcon from '../assets/toolsIcons/PS-icon.png';
import AiIcon from '../assets/toolsIcons/Ai-icon.png';
import IdIcon from '../assets/toolsIcons/id-icon.png';
import DesignIcon from '../assets/toolsIcons/designtool-icon.png';
import JavaIcon from '../assets/toolsIcons/java-icon.png';
import ReactNativeIcon from '../assets/toolsIcons/reactnative-icon.png';
import PhpIcon from '../assets/toolsIcons/php-icon.png';
import SqlIcon from '../assets/toolsIcons/sql-icon.png';
import MongoDBicon from '../assets/toolsIcons/mongo-icon.png';
import HTMLicon from '../assets/toolsIcons/html-icon.png';
import NodeIcon from '../assets/toolsIcons/node-icon.png';
import FlutterIcon from '../assets/toolsIcons/flutter-icon.png';
import Carousel from '../componets/Carousel';
import { ReactComponent as VedioIcon } from '../assets/video-call.svg';
import { ReactComponent as StarIcon } from '../assets/Star-icon.svg';
import { ReactComponent as LeftIcon } from '../assets/left-icon.svg';
import { ReactComponent as RightIcon } from '../assets/right-icon.svg';

import Lottie from 'react-lottie';
import figmalottie from '../lotties/figma.json';
import photoshop from '../lotties/photoshop.json';

import SkillIcon1 from '../assets/skill-animated-icon1.gif';
import SkillIcon2 from '../assets/skill-animated-icon2.gif';
import SkillIcon3 from '../assets/skill-animation-icon3.gif';
import SkillIcon4 from '../assets/skill-animation-icon4.gif';
import SkillIcon5 from '../assets/skill-animated-icon5.gif';

import Client1 from '../assets/clients/client1.png';
import Client3 from '../assets/clients/client3.png';
import Client2 from '../assets/clients/client1.png';

import { useNavigate } from 'react-router-dom';

import Cursor from '../componets/cursor';

import { serviceData } from '../data/serviceData';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const skills = [
  {
    title: 'Social Media Marketing',
    imageSrc: SkillIcon1 // Add your image source here
  },
  {
    title: 'Illustration',
    imageSrc: SkillIcon2 // Add your image source here
  },
  {
    title: 'Development',
    imageSrc: SkillIcon3 // Add your image source here
  },
  {
    title: 'Product Design',
    imageSrc: SkillIcon4 // Add your image source here
  },
  {
    title: 'Branding',
    imageSrc: SkillIcon5 // Add your image source here
  }
];
const figmaOptions = {
  loop: true,
  autoplay: true,
  animationData: figmalottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const photoshopOptions = {
  loop: true,
  autoplay: true,
  animationData: photoshop,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const cardData3 = [
  {
    title: 'Design Tools',
    icons: [figmaOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions]
  },
  {
    title: 'Development Using',
    icons: [photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions, photoshopOptions]
  }
];

const clients = [
  {
    name: 'Debbie Hagenes',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    rating: 5.0,
    imgSrc: Client1
  },
  {
    name: 'Debbie Hagenes',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    rating: 5.0,
    imgSrc: Client2
  },
  {
    name: 'Debbie Hagenes',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    rating: 5.0,
    imgSrc: Client3
  }

  // Add more client objects here
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const [isHoveringContact, setIsHoveringContact] = useState(false);

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(1); // Start with the second card centered
  const [activeDot, setActiveDot] = useState(1); // Initially set the middle dot as active

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const video1 = require('../assets/video2.mp4');

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();

  const viewServiceDetail = (services) => {
    navigate(`/service/${services.title}`);
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
  const cus11Ref = useRef(null);
  const cus12Ref = useRef(null);
  const cus13Ref = useRef(null);
  const cus14Ref = useRef(null);
  const mainfaqRef = useRef(null);
  const faq1Ref = useRef(null);
  const faq2Ref = useRef(null);
  const faq3Ref = useRef(null);
  const faq4Ref = useRef(null);
  const faq5Ref = useRef(null);
  const un1Ref = useRef(null);
  const un2Ref = useRef(null);
  const un3Ref = useRef(null);
  const un4Ref = useRef(null);
  const un5Ref = useRef(null);
  const un6Ref = useRef(null);
  const un7Ref = useRef(null);
  const un8Ref = useRef(null);
  const un9Ref = useRef(null);
  const on1Ref = useRef(null);
  const on2Ref = useRef(null);
  const on3Ref = useRef(null);
  const on4Ref = useRef(null);
  const on5Ref = useRef(null);
  const on6Ref = useRef(null);

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
    const cus11 = cus11Ref.current;
    const cus12 = cus12Ref.current;
    const cus13 = cus13Ref.current;
    const cus14 = cus14Ref.current;
    const mainfaq = mainfaqRef.current;
    const faq1 = faq1Ref.current;
    const faq2 = faq2Ref.current;
    const faq3 = faq3Ref.current;
    const faq4 = faq4Ref.current;
    const faq5 = faq5Ref.current;
    const un1 = un1Ref.current;
    const un2 = un2Ref.current;
    const un3 = un3Ref.current;
    const un4 = un4Ref.current;
    const un5 = un5Ref.current;
    const un6 = un6Ref.current;
    const un7 = un7Ref.current;
    const un8 = un8Ref.current;
    const un9 = un9Ref.current;
    const on1 = on1Ref.current;
    const on2 = on2Ref.current;
    const on3 = on3Ref.current;
    const on4 = on4Ref.current;
    const on5 = on5Ref.current;
    const on6 = on6Ref.current;
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
      yPercent: 350,
      duration: 1.6,
      smooth: 1
    });
    gsap.from(cus3, {
      yPercent: 350,
      duration: 2.6,
      smooth: 1
    });
    gsap.from(cus4, {
      yPercent: 350,
      duration: 2.1,
      smooth: 1
    });
    gsap.from(cus5, {
      yPercent: 350,
      duration: 1.3,
      smooth: 1
    });
    gsap.from(cus6, {
      yPercent: 350,
      duration: 1.5,
      smooth: 1
    });
    gsap.from(cus7, {
      yPercent: 200,
      opacity: 0,
      duration: 1.2,
      smooth: 1
    });
    gsap.from(cus8, {
      y: 400,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus8,
        markers: false,
        start: 'top 150%'
      }
    });
    gsap.from(cus9, {
      y: 300,
      opacity: 0,
      duration: 1.3,
      smooth: 1,
      scrollTrigger: {
        trigger: cus9,
        markers: false,
        start: 'top 150%'
      }
    });

    gsap.from(cus10, {
      // y: 150,
      // opacity: 0,
      // duration: 1.8,
      // smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: 'bottom 120%'
      }
    });
    gsap.from(cus11, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: 'bottom 10%'
      }
    });
    gsap.from(cus12, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: 'top 100%'
      }
    });

    gsap.from(cus13, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus13,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(cus14, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus14,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(mainfaq, {
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'bottom 20%'
      }
    });
    gsap.from(faq1, {
      yPercent: 300,
      duration: 1,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(faq2, {
      yPercent: 550,
      duration: 1.3,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(faq3, {
      yPercent: 600,
      duration: 1.6,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: 'top 100%'
      }
    });

    gsap.from(faq4, {
      yPercent: 650,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(faq5, {
      yPercent: 700,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: faq1,
        markers: false,
        start: 'top 100%'
      }
    });

    gsap.from(un1, {
      yPercent: 350,
      duration: 1.1,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 120%'
      }
    });
    gsap.from(un2, {
      yPercent: 350,
      duration: 1.3,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(un3, {
      yPercent: 350,
      duration: 1.5,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(un4, {
      yPercent: 350,
      duration: 1.7,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(un5, {
      yPercent: 350,
      duration: 1.9,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(un6, {
      yPercent: 350,
      duration: 2.1,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(un7, {
      yPercent: 350,
      duration: 2.3,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(un8, {
      yPercent: 350,
      duration: 2.5,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(un9, {
      yPercent: 350,
      duration: 2.7,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(on1, {
      yPercent: 350,
      duration: 1.5,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(on2, {
      yPercent: 400,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(on3, {
      yPercent: 350,
      duration: 1.9,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(on4, {
      yPercent: 400,
      duration: 2.1,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(on5, {
      yPercent: 400,
      duration: 2.3,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(on6, {
      yPercent: 400,
      duration: 2.5,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: 'top 100%'
      }
    });
  });
  const faqs = [
    { question: 'What services does Pixel Bharat offer?', answer: 'Pixel Bharat offers a range of services including Social Media Marketing, UX/UI Design, and Development. Our goal is to enhance your brand’s online presence and provide robust, scalable, and efficient solutions to drive your business forward.', ref: faq1Ref },
    { question: 'How can Pixel Bharat help improve my social media presence?', answer: 'Our social media marketing services include cutting-edge strategies tailored to captivate and convert your audience. We focus on enhancing your brand engagement and visibility across various social media platforms, ensuring a consistent and impactful online presence.', ref: faq2Ref },
    { question: 'What sets Pixel Bharat apart from other digital service providers?', answer: 'At Pixel Bharat, we believe in the power of collaboration and excellence. Our team of experienced professionals is dedicated to delivering innovative and tailored solutions that drive success for our clients. We prioritize quality, creativity, and client satisfaction, making us a trusted partner in the industry.', ref: faq3Ref },
    { question: 'What benefits can I expect from partnering with Pixel Bharat?', answer: 'By partnering with Pixel Bharat, you gain access to a range of benefits including standardized approaches for brand consistency, reduced costs through efficient strategies, customized solutions tailored to your business needs, affordable pricing, high levels of client satisfaction, and comprehensive resources to enhance your digital presence.', ref: faq4Ref },
    { question: 'How can I join the Pixel Bharat team?', answer: 'We are always looking for talented and dedicated professionals who are passionate about what they do. If you are interested in joining our team, please visit our Careers page to explore current opportunities and find your career with Pixel Bharat.', ref: faq5Ref }
  ];

  return (
    <div className={`page scroll-smooth ${isVisible ? 'slide-in' : ''}`}>
      <Header />

      <div className="blur-section">
        <div className="w-full flex flex-col py-10 space-y-20">
          {/* tranform section */}
          <div className="w-full px-8 flex flex-col lg:flex-row items-start lg:items-end gap-8">
            <div className="w-full overflow-hidden">
              <h1 className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold ">
                <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold hid flex gap-2.5 ">
                  <p ref={cus5Ref}> Transform</p>
                  <p ref={cus6Ref}> your</p>
                </p>
                <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold flex gap-2.5">
                  <p ref={cus2Ref}> vision</p>
                  <p ref={cus4Ref}> into</p> <p ref={cus3Ref}> reality!</p>
                </p>
              </h1>
            </div>
            <div className="lg:w-2/3 w-full text-left lg:text-right mt-4 lg:mt-0">
              <h4 ref={cus7Ref} className="text-[#4A4A4A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium">
                Pushing the boundaries of what's possible, driven by a passion for discovery and excellence.
              </h4>
            </div>
          </div>

          {/* projects section */}
          <div className="flex px-8 flex-col space-y-6 lg:space-y-8">
            <h2 className="text-[#ABABAB] text-[20px] font-medium">Services</h2>

            <div className="lg:flex lg:space-x-8 justify-evenly lg:space-y-0 py-8 space-y-8">
              {serviceData.map((item, index) => (
                <div className="flex flex-col space-y-4" key={index} onClick={() => viewServiceDetail(item)} onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                  <img className="w-full flex-[1_0_0] rounded-[30px] hovereffect" src={item.imgSrc} alt="" />
                  <h1 className="text-[#141414] text-[24px] font-semibold">{item.title}</h1>
                  <p className="text-[#4A4A4A] text-[20px]">{item.para}</p>
                </div>
              ))}
            </div>

            <div className="lg:flex py-8 justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="lg:w-4/6">
                <p className="text-[#4A4A4A] text-[20px] font-bold">Experience the power of collaboration and excellence with Pixel Bharat. Start your journey today and make a mark on your digital presence.</p>
              </div>
              <div />
              <div className="lg:justify-end">
                <a href="/project" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="px-8 py-3 text-white rounded-full bg-black text-[16px] font-semibold hover:shadow-xl border-[1px] hover:bg-white hover:border-[1px] hover:border-gray-400 hover:text-black">
                  Start a project with us
                </a>
              </div>
            </div>
          </div>

          {/* our story section */}
          <div className="flex px-8 justify-center items-center">
            <div ref={cus8Ref} className="relative flex w-full  lg:h-[510px] h-[650px]  flex-col my-10 justify-center  rounded-[36px] overflow-hidden">
              <video className="absolute inset-0 w-full h-full object-cover" src={video1} autoPlay loop muted playsInline />
              <div className="absolute inset-0"></div>
              <div ref={cus9Ref} className="relative z-10 flex flex-col justify-between h-full text-[#141414] p-8 lg:p-16">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1 className="text-[#141414] text-[24px] font-semibold">OUR STORY</h1>
                  </div>
                  <div>
                    <a href="/about-us" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="flex p-6 flex-col justify-center items-center gap-[10px] rounded-[50px] bg-[#141414] transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl  ">
                      <ArrowIcon className="w-[16px] h-[12px] flex-shrink-0" />
                    </a>
                  </div>
                </div>
                <div className="lg:flex justify-between space-y-4 lg:space-y-0">
                  <div className="flex items-end">
                    <h3 className="flex-[1_0_0]  text-[#4A4A4A] text-[20px] font-bold lg:flex-1">Experience the Power of Collaboration and Excellence!</h3>
                  </div>
                  <div className="lg:w-1/2 flex items-right ">
                    <p className="flex-[1_0_0] jstify text-[#4A4A4A] text-[16px] font-medium lg:flex-1">At Pixel Bharat, we believe in the power of collaboration and excellence. Our journey began with a vision to transform creative ideas into digital realities. With a passionate team of experts, we are dedicated to delivering innovative solutions that drive success for our clients. Our commitment to quality and excellence has established us as a trusted partner in the industry. Join us as we continue to push the boundaries of creativity and innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* skills section */}
          <div className="flex px-8 flex-col space-y-8 ">
            <h2 className="text-[#ABABAB] text-[20px] font-medium">SKILLS</h2>

            <div className="text-[#141414] text-[36x] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold ">
              <div ref={cus10Ref} className="flex flex-wrap items-center gap-2 lg:gap-5 overflow-hidden ">
                <p className="overflow-hidden" ref={un1Ref}>
                  Unlock
                </p>
                <div ref={un2Ref}>
                  {' '}
                  <LockIcon className="w-[80px] h-[60px] sm:w-[100px] sm:h-[70px] md:w-[127px] md:h-[90px] fill-[#141414] flip" />
                </div>
                <p className="flex gap-5 " ref={un3Ref}>
                  your <p ref={un4Ref}>design</p>
                </p>
              </div>
              <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold flex flex-wrap  gap-2 lg:gap-5 overflow-y-hidden lg:mt-10 lg:marT">
                <p ref={un5Ref}> potential </p>
                <p ref={un6Ref}> with</p> <p ref={un7Ref}> our</p>
                <p ref={un8Ref}>studio's</p>
                <p ref={un9Ref}>expertise</p>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {skills.map((card, index) => (
                <div key={index} onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="flex flex-col w-full space-y-4 ">
                  <div className="flex h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] p-4 sm:p-6 md:p-8 justify-center items-center gap-4 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-[#F0F0F0] hover:bg-white hovereffect">
                    <img className="w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]" src={card.imageSrc} alt="" />
                  </div>
                  <h4 className="text-[#000] text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium">{card.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Our expertise section */}
          <div className="flex px-8 flex-col space-y-6 lg:space-y-8 ">
            <div className="flex lg:justify-between lg:flex-row gap-8 flex-col item-center">
              <h1 className="text-[#141414] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-semibold">Our Expertise</h1>
            </div>

            <div ref={cus11Ref} className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {cardData3.map((card, cardIndex) => (
                <div key={cardIndex} className="flex flex-col justify-center items-center gap-6 p-8 sm:p-8 rounded-[36px] border-[2px]">
                  <h4 className="text-[#000] text-center text-[18px] sm:text-[24px] md:text-[24px] lg:text-[28px] font-semibold">{card.title}</h4>
                  <div className="flex flex-wrap gap-[12px]  p-2 rounded-[12px] justify-center">
                    {card.icons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="flex bg-[#f7f9fc] p-[6px] items-center justify-center w-[90px] h-[90px] rounded-[12px] ">
                        <Lottie options={icon} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* next about section */}
          <div ref={cus12Ref} className="lg:flex mx-8 lg:space-y-0 space-y-8 justify-between lg:space-x-4 p-8 rounded-[36px] bg-[#000] overflow-hidden" style={{ minHeight: '510px' }}>
            <div className="flex flex-col justify-between w-full overflow-hidden">
              <div className="flex space-x-3 items-center overflow-hidden">
                <LoadingIcon className=" w-[32px] h-[32px]" />
                <h4 className="text-[#fff] text-[20px] font-medium">Next about you</h4>
              </div>
              <h1 className="text-[#fff] text-[74px] sm:text-[48px] md:text-[56px] font-bold leading-tight overflow-hidden flex flex-wrap">
                <div className="flex gap-2 flex-wrap text-[30px] lg:text-[64px] font-resize my-8 ">
                  <p className="text-[30px] lg:text-[64px]" ref={on1Ref}>
                    Unforgettable
                  </p>
                  <p className="text-[30px] lg:text-[64px]" ref={on2Ref}>
                    mark
                  </p>
                  <p className="text-[30px] lg:text-[64px]" ref={on3Ref}>
                    {' '}
                    on
                  </p>
                  <p className="text-[30px] lg:text-[64px]" ref={on4Ref}>
                    your
                  </p>
                  <p className="text-[30px] lg:text-[64px]" ref={on5Ref}>
                    {' '}
                    digital
                  </p>
                  <p className="text-[30px] lg:text-[64px]" ref={on6Ref}>
                    {' '}
                    presence
                  </p>
                </div>
              </h1>
              <div className="flex flex-col space-y-[48px]">
                <h3 className="text-[#fff] text-[20px] font-medium">
                  Pushing the boundaries of what's possible, driven by a passion <br></br>for discovery and excellence.
                </h3>
                <div className="flex flex-wrap gap-3 ">
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[#ffffff] text-center text-[14px] font-semibold text-[#5E5E5E] shadow-xl">
                      Logo
                    </button>
                  </div>
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[#ffffff] text-center text-[14px] font-semibold text-[#5E5E5E] shadow-xl">
                      Branding
                    </button>
                  </div>
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[#ffffff] text-center text-[14px] font-semibold text-[#5E5E5E] shadow-xl">
                      Social
                    </button>
                  </div>
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[#ffffff] text-center text-[14px] font-semibold text-[#5E5E5E] shadow-xl">
                      Brand Identity
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <img src={laptop} alt="" />
          </div>

          {/* recent works section */}
          <div ref={cus13Ref} className="flex flex-col space-y-10">
            <h2 className="text-[#ABABAB] px-8 text-[20px] font-medium">RECENT WORKS</h2>
            <div className="flex px-8 lg:items-center  justify-between lg:flex-row flex-col gap-8">
              <p className="text-[#4A4A4A] jstify text-[20px]">Discover our latest projects that showcase our expertise and innovation. From dynamic social media campaigns to cutting-edge UX/UI designs, each project reflects our commitment to excellence and creativity. Explore our portfolio to see how we bring visions to life. </p>
              <div>
                <a href="/Portfolio.pdf" target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="flex py-3 px-8 border-[1px] border-gray-400 items-start gap-[8px] rounded-[100px] text-center text-[16px] font-semibold hover:bg-black hover:text-white">
                  Portfolio
                </a>
              </div>
            </div>
            <Carousel />
          </div>

          {/* faq section */}
          <div className="flex flex-col px-8 space-y-8  md:flex-row justify-between">
            <div ref={mainfaqRef} className=" flex-col space-y-8 w-full md:w-1/2">
              <h2 className="text-[#ABABAB] text-[20px] font-medium">FAQ</h2>
              <h3 className="text-[#141414] text-[30px] md:text-[40px] font-semibold">Answer to your questions</h3>
            </div>

            <div className="flex flex-col space-y-4 w-full md:w-1/2">
              {faqs.map((faq, index) => (
                <div ref={faq.ref} key={index} className="flex flex-col">
                  <div onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="flex justify-between px-4 py-2 flex-col items-center rounded-[24px] border-[2px] cursor-pointer" onClick={() => toggleAccordion(index)}>
                    <span className="flex pl-4  justify-between w-full items-center">
                      <h6 className="text-[#4A4A4A] text-[24px] font-medium ">{faq.question}</h6>
                      <h6 className="text-[#4A4A4A] text-[24px] md:text-[44px] font-medium">{openIndex === index ? '-' : '+'}</h6>
                    </span>
                    <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                      <div className="pl-4 pb-4">
                        <hr />
                        <br />
                        <p className="text-[20px] text-[#4A4A4A]">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Marquee gradient={false} speed={200} pauseOnHover={true}>
            <div className="text-[#9A9A9A] text-[20px] font-medium flex space-x-8 pt-8">
              <h1>ILLSTRATION</h1>
              <h1>BRANDING</h1>
              <h1>DESIGN</h1>
              <h1>DEVELOPMENT</h1>
              <h1>UI</h1>
              <h1>ILLSTRATION</h1>
              <h1>BRANDING</h1>
              <h1>DESIGN</h1>
              <h1>DEVELOPMENT</h1>
              <h1>UI</h1>
              <h1>ILLSTRATION</h1>
              <h1>BRANDING</h1>
              <h1>DESIGN</h1>
              <h1>DEVELOPMENT</h1>
              <h1>UI</h1>
              <h1>ILLSTRATION</h1>
              <h1>BRANDING</h1>
              <h1>DESIGN</h1>
              <h1>DEVELOPMENT</h1>
              <h1>UI</h1>
            </div>
          </Marquee>
        </div>

        <Collaborate />
      </div>
      <Footer />
    </div>
  );
}

const ClientCard = ({ client }) => {
  return (
    <div className="bg-black w-[563px] relative flex flex-row p-[24px] items-center gap-[24px] rounded-[16px] border-[8px] bg-[var(--Grays-Black,_#000)] [box-shadow:0px]">
      <div className="">
        <img src={client.imgSrc} className="absolute top-[65px] -left-[55px]" alt={client.name} />
      </div>
      <div className="flex flex-col gap-8 ml-28">
        <h2 className="text-[#FFF] text-[28px] font-semibold">{client.name}</h2>
        <p className="self-stretch text-[#FFF] text-[16px]">{client.description}</p>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
          <div className="text-center text-[14px] font-semibold text-white">{client.rating.toFixed(1)} rating</div>
        </div>
      </div>
    </div>
  );
};
