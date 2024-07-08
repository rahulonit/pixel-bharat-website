import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import TeamPic from '../assets/team-pic.png';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Collaborate from '../componets/Collaborate';
import Carousel from '../componets/Carousel';
import ProfilePic from '../assets/profile.png';
import config from '../config';
import { ReactComponent as FacebookIcon } from '../assets/Team/facebook-icon-Team.svg';
import { ReactComponent as InstagramIcon } from '../assets/Team/instagram-icon-Team.svg';
import { ReactComponent as TwitterIcon } from '../assets/Team/twitter-icon-Team.svg';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

export default function Team({isOpen}) {
  const [isVisible, setIsVisible] = useState(false);
  const [teammates, setTeammates] = useState([]);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  console.log(teammates);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  async function fetchTeamData() {
    try {
      const response = await fetch(`${config.apiUrl}api/teams`);
      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching team data:', error);
      throw error;
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeamData();
        setTeammates(data); // Assuming your API returns an array of team members
        setIsVisible(true); // Show the component after data is fetched
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchData();
  }, []);

  const textheadRef = useRef(null)
  const cus1Ref = useRef(null)
  const cus2Ref = useRef(null)
  const cus3Ref = useRef(null)
  const cus4Ref = useRef(null)
  const cus5Ref = useRef(null)
  const cus6Ref = useRef(null)
  const cus7Ref = useRef(null)
  const cus8Ref = useRef(null)
  const cus9Ref = useRef(null)
  const cus10Ref = useRef(null)
  const cus11Ref = useRef(null)
  const cus12Ref = useRef(null)
  const cus13Ref = useRef(null)
  const cus14Ref = useRef(null)
  const cus15Ref = useRef(null)
  const mainfaqRef=useRef(null)
  const faq1Ref=useRef(null)
  const faq2Ref=useRef(null)
  const faq3Ref=useRef(null)
  const faq4Ref=useRef(null)
  const faq5Ref=useRef(null)
  const cardRef = useRef(null);

  
  useGSAP(() => {
    const texthead = textheadRef.current
    const cus1 = cus1Ref.current
    const cus2 = cus2Ref.current
    const cus3 = cus3Ref.current
    const cus4 = cus4Ref.current
    const cus5 = cus5Ref.current
    const cus6 = cus6Ref.current
    const cus7 = cus7Ref.current
    const cus8 = cus8Ref.current
    const cus9 = cus9Ref.current
    const cus10 = cus10Ref.current
    const cus11 = cus11Ref.current
    const cus12 = cus12Ref.current
    const cus13 = cus13Ref.current
    const cus14 = cus14Ref.current
    const cus15 = cus14Ref.current

    const mainfaq=mainfaqRef.current
    const faq1=faq1Ref.current
    const faq2=faq2Ref.current
    const faq3=faq3Ref.current
    const faq4=faq4Ref.current
    const faq5=faq5Ref.current
    gsap.from(texthead, {
      x: -400,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: texthead,
        markers: false,
        start: "top 100%"
      }
    });


    gsap.from(cus1, {
      yPercent: 350,
      duration: 2.3,
      ease: "power4",
      smooth: 1,
    });
    gsap.from(cus2, {
      yPercent: 200,
      duration: 1.6,
      smooth: 1,

    });
    gsap.from(cus3, {
      yPercent: 200,
      duration: 1.9,
      smooth: 1,
    })
    gsap.from(cus4, {
      yPercent: 200,
      duration: 2,
      smooth: 1,
    })
    gsap.from(cus5, {
      yPercent: 200,
      duration: 2.2,
      smooth: 1,
    })
    gsap.from(cus6, {
      yPercent: 200,
      duration: 2.4,
      smooth: 1,
    })
    gsap.from(cus7, {
      yPercent: 200,
      opacity: 0,
      duration: 1.2,
      smooth: 1,
    })
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
    })
    gsap.from(cus9, {
      y:200,
      opacity: 0,
      duration: 1.3,
      smooth: 1,
      // scrollTrigger: {
      //   trigger: cus9,
      //   markers: false,
      //   start: "top 150%"
      // }

    })

    gsap.from(cus10, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: "bottom 120%"
      }
    })
    gsap.from(cus11, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: "bottom 10%"
      }
    })
    gsap.from(cus12, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus12,
        markers: false,
        start: "top 100%"
      }
    })

    gsap.from(cus13, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus13,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(cus14, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus14,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(cus15, {
      y: 150,
      opacity: 0,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: cus10,

        markers: false,
        start: "bottom 120%"
      }
    })
    gsap.from(mainfaq, {
     
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(faq1, {
      yPercent: 300,
      duration: 1,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    })
    gsap.from(faq2, {
      yPercent: 550,
      duration: 1.3,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    })
     gsap.from(faq3, {
      yPercent: 600,
      duration: 1.6,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    })
    
    gsap.from(faq4, {
      yPercent: 650,
      duration: 1.8,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    }) 
    gsap.from(faq5, {
      yPercent: 700,
      duration: 2,
      smooth: 1,
      scrollTrigger: {
        trigger: mainfaq,
        markers: false,
        start: "top 100%"
      }
    })
  })

 
  useEffect(() => {
    const cardElement = cardRef.current;

    gsap.from(cardElement, {
      y: 200,
      opacity: 0,
      duration: 1.8,
      scrollTrigger: {
        trigger: cardElement,
        markers: false,
        start: "top 100%"
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);


  const backgroundColors = ["#F1CBC3", "#E8F1C3", "#C3F1F1", "#DEDCFB", "#FFE3CE", "#FFEFBF"];

  const getRandomBackgroundColor = () => {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  };

  const TeammateCard = ({ teammate }) => (
    <div className="flex flex-col justify-start items-start gap-[16px] rounded-[20px] border-[1px] rounded-t-[20px] overflow-hidden">
      <div  className="relative w-full flex justify-center items-end lg:h-[230px]" style={{ background: getRandomBackgroundColor() }}>
        <img src={config.apiUrl + teammate.image.replace(/\\/g, '/')} alt="" className="bottom-0 w-[220px] inset-0 object-cover" />
      </div>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-[20px] font-semibold">{teammate.name}</h2>
            <h4 className="text-[#4A4A4A] text-[16px] font-medium">{teammate.designation}</h4>
          </div>
          <div>
            <p className="text-[#808080] text-[14px]">{teammate.description}</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <a target="_blank" href={teammate.twitter}>
            <TwitterIcon className="flex w-[36px] h-[36px] p-[9px] justify-center items-center rounded-[100px] bg-[#F2F4F7]" />
          </a>
          <a target="_blank" href={teammate.insta}>
            <InstagramIcon className="flex w-[36px] h-[36px] p-[9px] justify-center items-center rounded-[100px] bg-[#F2F4F7]" />
          </a>
          <a target="_blank" href={teammate.linkedin}>
            <FacebookIcon className="flex w-[36px] h-[36px] p-[9px] justify-center items-center rounded-[100px] bg-[#F2F4F7]" />
          </a>
        </div>
      </div>
    </div>
  );
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
    <div className={`page ${isVisible ? 'slide-in' : ''}`}>
      <Header />
      <div className="blur-section">
        <div className="w-full flex flex-col pt-10 lg:space-y-20 space-y-10">
          {/* main heading */}

          <p className="text-[#141414] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px] font-bold flex gap-2 overflow-hidden px-8 flex-wrap"><p ref={cus2Ref}>From</p><p ref={cus3Ref}> the</p><p ref={cus4Ref}>start</p> <p ref={cus5Ref}>we</p><p ref={cus6Ref}> sought</p></p>

          {/* poster */}
          <div  className="w-full h-1/2 px-8 rounded-[30px]">
            <img ref={cus9Ref}  src={TeamPic} alt="" className="w-full rounded-[30px]" />
          </div>

          {/* our goal section */}
          <div className="md:flex px-8 justify-between space-y-8 md:space-y-0">
            <h2 className="text-[#ABABAB] text-[20px] font-medium">Our Goal</h2>
            <div className="md:w-1/2">
              <p className=" text-[#4A4A4A] text-[16px] font-medium">Our mission is to innovate and inspire. We strive to deliver top-notch solutions that meet and exceed our clients' expectations. Our goal is to continuously improve and make a positive impact in our field. </p>
            </div>
          </div>

          {/* our goal section */}
          <div ref={cus10Ref} className="flex lg:flex-row px-8 flex-col gap-8 justify-center ">
            {/* first card */}
            <div className="flex lg:w-[438px] p-8 flex-col items-start gap-[32px] rounded-[30px] border-[2px]">
              <h3 className="text-[#141414] text-center text-[24px] font-semibold">Projects Completed</h3>
              <h1 className="self-stretch text-[#141414] text-[64px] font-bold">40</h1>
            </div>
            {/* second card */}
            <div className="flex lg:w-[438px] p-8 flex-col items-start gap-[32px] rounded-[30px] border-[2px] ">
              <h3 className="text-[#141414] text-center text-[24px] font-semibold">Ongoing Projects</h3>
              <h1 className="self-stretch text-[#141414] text-[64px] font-bold">15</h1>
            </div>
          </div>

          {/* since 2024 section */}
          <div className="md:flex px-8 justify-between space-y-8 md:space-y-0">
            <h2 className="text-[#ABABAB] text-[20px] font-medium">Since 2024</h2>
            <div className="md:w-1/2">
              <p className=" text-[#4A4A4A] text-[16px] font-medium">Since our founding in 2024, we have consistently delivered outstanding results. Our commitment to quality and innovation has enabled us to grow and expand our capabilities.</p>
            </div>
          </div>

          {/* Team section */}
          <div>
            <div className="flex lg:justify-between lg:flex-row flex-col  px-8">
              <div>
                <h2 className="text-[#ABABAB]  text-[20px] font-medium pb-8">Our Team</h2>
              </div>
              <div className="flex md:flex-row gap-8 flex-col justify-end">
                <div className="md:w-1/2">
                  <p className=" text-[#4A4A4A] text-[16px] font-medium">Our team is composed of talented and dedicated professionals who are passionate about what they do.</p>
                </div>
                {/* Button */}
                <div>
                  <a href='/careers' className="py-3 px-8 rounded-[100px] bg-black text-white text-[16px] font-semibold hover:shadow-xl border-[1px] border-black hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                    Join Us
                  </a>
                </div>
              </div>
            </div>

            {/* Team section */}
            <div  className="p-8 flex flex-col gap-8">
              <h2  className="text-[#141414] text-[24px] font-semibold">Meet the Team</h2>
              <div ref={cus15Ref}  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                {teammates.map((teammate, index) => (
                  <TeammateCard key={index} teammate={teammate}  />
                ))}
              </div>
            </div>

            {/* Latest works */}
            <div className="flex flex-col space-y-8">
              <div className="flex lg:flex-row flex-col justify-between gap-8 px-8">
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#ABABAB]  text-[20px] font-medium ">Team</h2>
                  <h5 className="text-[#141414]  text-[40px] font-semibold">Our Latest works!</h5>

                  {/* Button */}
                  <div>
                    <a href='/project' className="py-3 px-8  rounded-[100px] bg-black text-white text-[16px] font-semibold hover:shadow-xl border-[1px] border-black hover:bg-white hover:border-[1px] hover:border-gray-300 hover:text-black" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
                      See our projects
                    </a>
                  </div>
                </div>
                <div className=" text-[#4A4A4A] text-[16px] font-medium">
                  <p className="pb-3">We are proud to showcase some of our recent projects that highlight our creativity and commitment to quality.</p>
                  <ul className="pl-6 list-disc">
                    <li>Innovative Design Mockup: A fresh and modern design approach.</li>
                    <li>Comprehensive Branding Package: Complete branding solutions for businesses.</li>
                    <li>Cutting-edge Product Design: Innovative products that stand out.</li>
                    <li>Advanced Tech Solutions: State-of-the-art technology implementations.</li>
                  </ul>
                </div>
              </div>
              <br></br>

              <Carousel isOpen={isOpen}/>
            </div>
          </div>

          <Collaborate />
        </div>
      </div>
      <Footer />

    </div>
  );
}
