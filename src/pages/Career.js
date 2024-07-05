import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import image1 from '../assets/about-images/image1.png';
import image2 from '../assets/about-images/image2.png';
import image3 from '../assets/about-images/image3.png';
import image4 from '../assets/about-images/image4.png';
import CareerPoster from '../assets/career-poster.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Career() {
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

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
  const mainfaqRef = useRef(null);
  const faq1Ref = useRef(null);
  const faq2Ref = useRef(null);
  const faq3Ref = useRef(null);
  const faq4Ref = useRef(null);
  const faq5Ref = useRef(null);
  const faq6Ref = useRef(null);
  const cardRef = useRef(null);
  const newimg1Ref = useRef(null);
  const newimg2Ref = useRef(null);
  const newimg3Ref = useRef(null);
  const newimg4Ref = useRef(null);
  const newimg5Ref = useRef(null);
  const newimg6Ref = useRef(null);
  const mainimgRef = useRef(null);
  const newimg12Ref = useRef(null);
  const newimg22Ref = useRef(null);
  const newimg32Ref = useRef(null);
  const newimg42Ref = useRef(null);
  const newimg52Ref = useRef(null);
  const newimg62Ref = useRef(null);

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
    const mainfaq = mainfaqRef.current;
    const faq1 = faq1Ref.current;
    const faq2 = faq2Ref.current;
    const faq3 = faq3Ref.current;
    const faq4 = faq4Ref.current;
    const faq5 = faq5Ref.current;
    const faq6 = faq6Ref.current;
    const img1 = newimg1Ref.current;
    const img2 = newimg2Ref.current;
    const img3 = newimg3Ref.current;
    const img4 = newimg4Ref.current;
    const img5 = newimg5Ref.current;
    const img6 = newimg6Ref.current;
    const mainimg = mainimgRef.current;
    const img12 = newimg12Ref.current;
    const img22 = newimg22Ref.current;
    const img32 = newimg32Ref.current;
    const img42 = newimg42Ref.current;
    const img52 = newimg52Ref.current;
    const img62 = newimg62Ref.current;

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
      y: 400,
      duration: 1.8,
      smooth: 1,
      stagger: 2,
      scrollTrigger: {
        trigger: cus8Ref.current,
        markers: false,
        start: 'top 150%'
      }
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

    gsap.from(mainfaq, {
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 10%'
      }
    });
    gsap.from(faq1, {
      scale: 0,
      duration: 1,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 110%'
      }
    });
    gsap.from(faq2, {
      scale: 0,
      duration: 1.3,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 100%'
      }
    });
    gsap.from(faq3, {
      scale: 0,
      duration: 1.6,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 90%'
      }
    });

    gsap.from(faq4, {
      scale: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 80%'
      }
    });
    gsap.from(faq5, {
      scale: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 75%'
      }
    });
    gsap.from(faq6, {
      scale: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img1, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img12, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });

    gsap.from(img2, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img22, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img3, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img32, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 70%'
      }
    });
    gsap.from(img4, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img42, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img5, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img52, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img6, {
      y: 200,
      opacity: 0,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
    gsap.from(img62, {
      scale: 4,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainimg,
        markers: false,
        start: 'top 50%'
      }
    });
  });

  const solvers = [
    { src: image1, alt: 'Image 1', heading: 'Glabal Annual Review', position: 'Graphic designer', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image2, alt: 'Image 2', heading: 'Glabal Annual Review', position: 'Graphic designer', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image3, alt: 'Image 3', heading: 'Glabal Annual Review', position: 'Graphic designer', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image4, alt: 'Image 4', heading: 'Glabal Annual Review', position: 'Graphic designer', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image1, alt: 'Image 5', heading: 'Glabal Annual Review', position: 'Graphic designer', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image2, alt: 'Image 6', heading: 'Glabal Annual Review', position: 'Graphic designer', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image3, alt: 'Image 7', heading: 'Glabal Annual Review', position: 'Graphic designer', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' }
  ];

  const images = [
    { src: image1, alt: 'Image 1', heading: 'Glabal Annual Review', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image2, alt: 'Image 2', heading: 'Glabal Annual Review', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image3, alt: 'Image 3', heading: 'Glabal Annual Review', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image4, alt: 'Image 4', heading: 'Glabal Annual Review', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image1, alt: 'Image 5', heading: 'Glabal Annual Review', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image2, alt: 'Image 6', heading: 'Glabal Annual Review', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' },
    { src: image3, alt: 'Image 7', heading: 'Glabal Annual Review', para: 'Unite your unique skills with those of your colleagues in order to find the very best solutions.' }
  ];

  const Carddata = [
    { number: '01', heading: 'Health and Wellness Programs', para: 'At Pixel Bharat, we prioritize the health and well-being of our employees. We offer comprehensive health insurance plans, wellness programs, and access to fitness facilities to ensure our team stays healthy and active.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000', ref: faq1Ref },
    { number: '02', heading: 'Professional Development', para: 'We believe in continuous learning and growth. Our employees have access to training programs, workshops, and conferences to enhance their skills and advance their careers.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF', ref: faq2Ref },
    { number: '03', heading: 'Work-Life Balance', para: 'We understand the importance of work-life balance. Our flexible work hours and generous leave policies help our employees maintain a healthy balance between their professional and personal lives.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000', ref: faq3Ref },
    { number: '04', heading: 'Collaborative Work Environment', para: 'Join a team where collaboration and creativity thrive. Our open office layout and regular team-building activities foster a positive and inclusive work culture.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF', ref: faq4Ref },
    { number: '05', heading: 'Competitive Compensation', para: 'We offer competitive salaries and performance-based bonuses to reward the hard work and dedication of our employees.', color1: '#FFFFFF', color2: '#ABABAB', color3: '#000000', ref: faq5Ref },
    { number: '06', heading: 'Employee Recognition', para: 'We value the contributions of our team members. Our employee recognition programs celebrate achievements and milestones, fostering a culture of appreciation and motivation.', color1: '#000000', color2: '#ABABAB', color3: '#FFFFFF', ref: faq6Ref }
  ];

  const Card = Carddata.map((item, index) => {
    return (
      <div className="flex w-full p-8 flex-col gap-[32px] rounded-[30px] border-[2px]" style={{ backgroundColor: item.color1 }} key={index} ref={item?.ref}>
        <h2 className="text-[20px] font-medium" style={{ color: item.color2 }}>
          {item.number}
        </h2>
        <h3 className="text-[24px] font-semibold" style={{ color: item.color3 }}>
          {item.heading}
        </h3>
        <p className="text-[20px]" style={{ color: item.color2 }}>
          {item.para}
        </p>
      </div>
    );
  });

  return (
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />

      <div className="w-full flex flex-col  py-10 space-y-20">
        {/* heading section */}
        <div className="w-full px-8 flex flex-col lg:flex-row items-start lg:items-end gap-8">
          <div className="w-full">
            <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold flex gap-5 overflow-hidden pl-8">
              <p ref={cus2Ref}>Careers</p>
            </p>
            <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold flex gap-5 overflow-hidden pl-8">
              <p ref={cus3Ref}>with</p>
              <p ref={cus4Ref}>Pixel</p> <p ref={cus5Ref}>Bharat</p>
            </p>
          </div>
          <div ref={cus7Ref} className="lg:w-2/3 w-full text-left lg:text-right mt-4 lg:mt-0">
            <h4 className="text-[#4A4A4A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium">Join a team where collaboration and creativity thrive.</h4>
          </div>
        </div>

        {/* poster section */}
        <div ref={cus9Ref} className="w-full h-1/2 px-8 rounded-[30px]">
          <img src={CareerPoster} alt="" className="w-full rounded-[30px]" />
        </div>

        {/* about us section */}
        <div className="md:flex px-8 justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col space-y-8 md:w-1/3">
            <h3 className="text-[#141414] text-[24px] font-semibold">Let’s Build something great, together</h3>
            <div>
              <Link to="/find-job">
                <button onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact} className=" py-3 px-8 p justify-center items-start gap-[8px] rounded-[100px] bg-[var(--Default-Black,_#000)] flex-[1_0_0] text-[16px] font-semibold text-white hover:shadow-xl  hover:bg-white hover:border-[1px] border-[1px] border-black hover:border-gray-300 hover:text-black">
                  Find your career with Pixel Bharat
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className=" text-[#4A4A4A] text-[16px] font-medium">At Pixel Bharat, we believe in the power of collaboration and innovation. Join our dynamic team and be part of a community that is shaping the future of digital marketing, design, and development.</p>
          </div>
        </div>

        {/* Employee Benefits */}

        <div ref={mainfaqRef} className="flex flex-col gap-8 px-8">
          <h2 className="text-[#141414] text-[40px] font-semibold">Employee Benefits</h2>
          <div className="grid justify-center gap-8  py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">{Card}</div>
        </div>
      </div>

      <Collaborate />
      <Footer />
    </div>
  );
}
