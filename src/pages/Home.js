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

const cardData3 = [
  {
    title: 'Design Tools',
    icons: [FigmaIcon, XDIcon, AeIcon, Diamond, PsIcon, AiIcon, IdIcon, DesignIcon]
  },
  {
    title: 'Development Using',
    icons: [JavaIcon, ReactNativeIcon, PhpIcon, SqlIcon, MongoDBicon, HTMLicon, NodeIcon, FlutterIcon]
  }
];

const faqs = [
  { question: 'What services does Pixel Bharat offer?', answer: 'Pixel Bharat offers a range of services including Social Media Marketing, UX/UI Design, and Development. Our goal is to enhance your brand’s online presence and provide robust, scalable, and efficient solutions to drive your business forward.' },
  { question: 'How can Pixel Bharat help improve my social media presence?', answer: 'Our social media marketing services include cutting-edge strategies tailored to captivate and convert your audience. We focus on enhancing your brand engagement and visibility across various social media platforms, ensuring a consistent and impactful online presence.' },
  { question: 'What sets Pixel Bharat apart from other digital service providers?', answer: 'At Pixel Bharat, we believe in the power of collaboration and excellence. Our team of experienced professionals is dedicated to delivering innovative and tailored solutions that drive success for our clients. We prioritize quality, creativity, and client satisfaction, making us a trusted partner in the industry.' },
  { question: 'What benefits can I expect from partnering with Pixel Bharat?', answer: 'By partnering with Pixel Bharat, you gain access to a range of benefits including standardized approaches for brand consistency, reduced costs through efficient strategies, customized solutions tailored to your business needs, affordable pricing, high levels of client satisfaction, and comprehensive resources to enhance your digital presence.' },
  { question: 'How can I join the Pixel Bharat team?', answer: 'We are always looking for talented and dedicated professionals who are passionate about what they do. If you are interested in joining our team, please visit our Careers page to explore current opportunities and find your career with Pixel Bharat.' }
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

  return (
    <div className={`page scroll-smooth ${isVisible ? 'slide-in' : ''}`}>
      <Header />

      <div className="blur-section">
        <div className="w-full flex flex-col py-10 space-y-20">
          {/* tranform section */}
          <div className="w-full px-8 flex flex-col lg:flex-row items-start lg:items-end gap-8">
            <div className="w-full">
              <h1 className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold">
                Transform your <br /> vision into reality!
              </h1>
            </div>
            <div className="lg:w-2/3 w-full text-left lg:text-right mt-4 lg:mt-0">
              <h4 className="text-[#4A4A4A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium">Pushing the boundaries of what's possible, driven by a passion for discovery and excellence.</h4>
            </div>
          </div>

          {/* projects section */}
          <div className="flex px-8 flex-col space-y-8">
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
                <a href='/project' onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="px-8 py-3 text-white rounded-full bg-black text-[16px] font-semibold hover:shadow-xl border-[1px] hover:bg-white hover:border-[1px] hover:border-gray-400 hover:text-black">
                  Start a project with us
                </a>
              </div>
            </div>
          </div>

          {/* our story section */}
          <div className="flex px-8 justify-center items-center">
            <div className="relative flex w-full  lg:h-[510px] h-[650px]  flex-col my-10 justify-center  rounded-[36px] overflow-hidden">
              <video className="absolute inset-0 w-full h-full object-cover" src={video1} autoPlay loop muted playsInline />
              <div className="absolute inset-0"></div>
              <div className="relative z-10 flex flex-col justify-between h-full text-[#141414] p-8 lg:p-16">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1 className="text-[#141414] text-[24px] font-semibold">OUR STORY</h1>
                  </div>
                  <div>
                    <a href='/about-us' onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="flex p-6 flex-col justify-center items-center gap-[10px] rounded-[50px] bg-[#141414] transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl  ">
                      <ArrowIcon className="w-[16px] h-[12px] flex-shrink-0" />
                    </a>
                  </div>
                </div>
                <div className="lg:flex justify-between space-y-4 lg:space-y-0">
                  <div className="flex items-end">
                    <h3 className="flex-[1_0_0] text-[#4A4A4A] text-[20px] font-bold lg:flex-1">Experience the Power of Collaboration and Excellence!</h3>
                  </div>
                  <div className="lg:w-1/2 flex items-right ">
                    <p className="flex-[1_0_0] text-[#4A4A4A] text-[16px] font-medium lg:flex-1">At Pixel Bharat, we believe in the power of collaboration and excellence. Our journey began with a vision to transform creative ideas into digital realities. With a passionate team of experts, we are dedicated to delivering innovative solutions that drive success for our clients. Our commitment to quality and excellence has established us as a trusted partner in the industry. Join us as we continue to push the boundaries of creativity and innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* skills section */}
          <div className="flex px-8 flex-col space-y-8 ">
            <h2 className="text-[#ABABAB] text-[20px] font-medium">SKILLS</h2>

            <div className="text-[#141414] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold">
              <div className="flex flex-wrap items-center gap-2">
                <p>Unlock</p>
                <LockIcon className="w-[80px] h-[60px] sm:w-[100px] sm:h-[70px] md:w-[127px] md:h-[90px] fill-[#141414]" />
                <p>your design</p>
              </div>
              <p>potential with our studio’s expertise</p>
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
          <div className="flex px-8 flex-col space-y-8 ">
            <div className="flex lg:justify-between lg:flex-row gap-8 flex-col item-center">
              <h1 className="text-[#141414] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-semibold">Our Expertise</h1>
             
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {cardData3.map((card, index) => (
                <div key={index} className="flex flex-col justify-center items-center gap-6 p-8 sm:p-8 rounded-[36px] border-[2px]">
                  <h4 className="text-[#000] text-center text-[18px] sm:text-[24px] md:text-[24px] lg:text-[28px] font-semibold">{card.title}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {card.icons.map((icon, idx) => (
                      <img key={idx} className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] p-[4px] sm:p-[6px] flex justify-center items-center rounded-[10px] bg-[#F0F0F0]" src={icon} alt="" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* next about section */}
          <div className="lg:flex mx-8 lg:space-y-0 space-y-8 justify-between lg:space-x-4 p-8 rounded-[36px] bg-[#F2F2F2]" style={{ minHeight: '510px' }}>
            <div className="flex flex-col justify-between w-full">
              <div className="flex space-x-3 items-center">
                <LoadingIcon className="w-[32px] h-[32px]" />
                <h4 className="text-[#4A4A4A] text-[16px] font-medium">Next about</h4>
              </div>

              <div className="flex flex-col space-y-[48px]">
                <h3 className="text-[#4A4A4A] text-[18px] font-semibold">Art of innovation and leaves an unforgettable mark on your digital presence</h3>
                <div className="flex flex-wrap gap-3 ">
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[var(--Purple-900,_#160D27)] text-center text-[14px] font-semibold text-white hover:shadow-xl  hover:bg-white  hover:border-gray-300 hover:text-black">
                      Logo
                    </button>
                  </div>
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[var(--Purple-900,_#160D27)] text-center text-[14px] font-semibold text-white hover:shadow-xl  hover:bg-white  hover:border-gray-300 hover:text-black">
                      Branding
                    </button>
                  </div>
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[var(--Purple-900,_#160D27)] text-center text-[14px] font-semibold text-white hover:shadow-xl  hover:bg-white  hover:border-gray-300 hover:text-black">
                      Social
                    </button>
                  </div>
                  <div>
                    <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="py-2 px-4  justify-end items-end gap-[8px]  rounded-[100px] bg-[var(--Purple-900,_#160D27)] text-center text-[14px] font-semibold text-white hover:shadow-xl  hover:bg-white  hover:border-gray-300 hover:text-black">
                      Brand Identity
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <img src={laptop} alt="" />
          </div>

          {/* recent works section */}
          <div className="flex flex-col space-y-8 ">
            <h2 className="text-[#ABABAB] px-8 text-[20px] font-medium">RECENT WORKS</h2>
            <div className="flex px-8 lg:items-center  justify-between lg:flex-row flex-col gap-8">
              <p className="text-[#4A4A4A] text-[20px]">Discover our latest projects that showcase our expertise and innovation. From dynamic social media campaigns to cutting-edge UX/UI designs, each project reflects our commitment to excellence and creativity. Explore our portfolio to see how we bring visions to life. </p>
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
            <div className=" flex-col space-y-8 w-full md:w-1/2">
              <h2 className="text-[#ABABAB] text-[20px] font-medium">FAQ</h2>
              <h3 className="text-[#141414] text-[30px] md:text-[40px] font-semibold">Answer to your questions</h3>
            </div>

            <div className="flex flex-col space-y-4 w-full md:w-1/2">
              {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col">
                  <div onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className="flex justify-between px-4 py-2 flex-col items-center rounded-[24px] border-[2px] cursor-pointer" onClick={() => toggleAccordion(index)}>
                    <span className="flex justify-between w-full items-center">
                      <h6 className="text-[#4A4A4A] text-[24px] font-semibold md:text-[18px]">{faq.question}</h6>
                      <h6 className="text-[#4A4A4A] text-[24px] md:text-[44px] font-medium">{openIndex === index ? '-' : '+'}</h6>
                    </span>
                    {openIndex === index && (
                      <div className="px-4 py-2 md:px-6 md:py-4">
                        <hr />
                        <br></br>
                        <p className="text-[20px] text-[#4A4A4A] ">{faq.answer}</p>
                      </div>
                    )}
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
